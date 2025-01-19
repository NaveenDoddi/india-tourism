import React, { useEffect } from "react"
import { useState } from "react";
import axios from 'axios';
const cheerio = require('cheerio');

function SearchedPlaces(props) {

      const [wikiData, setWikiData] = useState(null)
      
      useEffect(() => {
            const fetchData = async (place) => {
                  try {
                        const response = await axios.get('http://localhost:5000/api/wiki', {
                              params: {
                                    placeName: place, // Pass the parameter here
                              },
                        });

                        const $ = cheerio.load(response.data);
                        var info = []
                        const imageUrls = []; // Array to store absolute image URLs

                        const baseUrl = 'https://en.wikipedia.org'; // Base URL of the website

                        $('table.infobox img.mw-file-element').each((index, element) => {
                              let imgUrl = $(element).attr('src');
                              if (imgUrl) {
                                    // Convert relative URLs to absolute URLs
                                    if (!imgUrl.startsWith('http') && !imgUrl.startsWith('//')) {
                                          imgUrl = new URL(imgUrl, baseUrl).href;
                                    }
                                    imageUrls.push(imgUrl);
                              }
                        });

                        var info_label = []
                        var info_data = []
                        $('th.infobox-label').each((index, element) => {
                              info_label.push($(element).text());
                        });
                        $('td.infobox-data').each((index, element) => {
                              info_data.push($(element).text());
                        });

                        const pTags = [];
                        $('p').each((index, element) => {
                              pTags.push($(element).text());
                        });

                        
                        for (let i = 0; i < info_label.length; i++) {
                              info.push({
                                    [info_label[i]]: info_data[i]
                              })
                        }

                        info.push(
                              {
                                    'latitude': $('span.latitude').text(),
                                    'longitude': $('span.longitude').text()
                              }
                        )

                        var city_map_img = $('a.mw-kartographer-map img').attr('src');
                        if (city_map_img) {
                              if (!city_map_img.startsWith('http') && !city_map_img.startsWith('//')) {
                                    city_map_img = new URL(city_map_img, baseUrl).href;
                              }
                        }

                        info.push(
                              {
                                    'city_map_img': city_map_img
                              }
                        )

                        var nicknames = []
                        $('div.nickname').each((index, element) => {
                              nicknames.push($(element).text());
                        });

                        info.push(nicknames)

                        info.push(imageUrls);
                        info.push(pTags)

                        setWikiData(info);

                  } catch (error) {
                        console.error('Error fetching data from the backend:', error);
                  }
                  console.log(wikiData)
            }
            
            fetchData(props.placeName)
            
      }, []);

      useEffect(() => {
            console.log("Data updated:", wikiData);
          }, [wikiData]);

      return (
            
            
            <div>
                  {wikiData && wikiData[0].country}
                  {props.placeName}
            </div>
      )

}

export default SearchedPlaces
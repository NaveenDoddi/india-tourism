import React, { useEffect } from "react"
import { useState } from "react";
import axios from 'axios';
const cheerio = require('cheerio');

function SearchedPlaces(props) {

      const [images, setImages] = useState(null)
      const [paras, setParas] = useState(null)
      useEffect(() => {
            const fetchData = async (place) => {
                  try {
                        const response = await axios.get('http://localhost:5000/api/wiki', {
                              params: {
                                    placeName: place, // Pass the parameter here
                              },
                        });

                        const $ = cheerio.load(response.data);
                        const pTags = [];

                        $('p').each((index, element) => {
                              pTags.push($(element).text());
                        });

                        const images = [];
                        $('img').each((index, element) => {
                              let imgSrc = $(element).attr('src');
                              if (imgSrc) {
                                    if (!imgSrc.startsWith('http') && !imgSrc.startsWith('//')) {
                                          imgSrc = new URL(imgSrc, 'https://en.wikipedia.org').href;
                                    } else if (imgSrc.startsWith('//')) {
                                          imgSrc = 'https:' + imgSrc;
                                    }
                                    images.push(imgSrc);
                              }
                        });

                        setParas(pTags[2]);
                        setImages(images[5])

                  } catch (error) {
                        console.error('Error fetching data from the backend:', error);
                  }
            }
            fetchData()
      }, [props.placeName]);

      return (
            <div>

                  <div>
                        <img src={images} alt="" />
                  </div>
                  <div>
                        {paras}
                  </div>
                  {props.placeName}
            </div>
      )

}

export default SearchedPlaces
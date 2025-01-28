import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { load } from 'cheerio';

import Attractions from './attractions'; 
import CityPageExperience from './city_page_experience';
const IncredibleIndiaAttractions = () => {
      const [attractions, setAttractions] = useState([]);
      const [experiences, setexperiences] = useState([]);
      const [error, setError] = useState(null);

      useEffect(() => {
            const fetchAttractions = async () => {
                  try {
                        const url = 'http://localhost:5000/api/inc-home';
                        const baseUrl = 'https://www.incredibleindia.gov.in';
                        const response = await axios.get(url);
                        const $ = load(response.data);

                        const incAttractionContent = [];
                        const incExperiences = [];
                        
                        $('div.attraction div.inc-attraction-v1-img ').each((index, element) => {
                              
                              const text = $(element).find('h2').text();
                              const image = $(element).find('img').attr('src');
                              const Url = $(element).find('a').attr('href');

                              incAttractionContent.push({
                                    
                                    'name': text,
                                    'image': image,
                                    'Url': Url
                              });
                              
                        })
                        setAttractions(incAttractionContent)


                        $('div.inc-experience-v1 div.inc-card__v2').each((index, element) => {
                              const state = $(element).find('span.inc-ic-state').text()
                              const crafts = $(element).find('span.inc-ic-crafts').text()
                              const text = $(element).find('p.inc-card-text').text();
                              const image = $(element).find('img').attr('src');
                              const Url = $(element).find('a').attr('href');
            
                              incExperiences.push({
                                    'state' : state,
                                    'crafts' : crafts,
                                    'text': text,
                                    'image': image,
                                    'Url': Url
                              });
                        })
                        setexperiences(incExperiences)
                        // setAttractions(incAttractionContent);
                  } catch (err) {
                        setError(err.message);
                  }
            };

            fetchAttractions();
      }, []);

      if (error) {
            return <div>Loading.....</div>;
      }

      return (
            <div>
                  {/* <Attractions data = {attractions} /> */}
                  <div>
                        <CityPageExperience  data = {experiences}/>
                  </div>
            </div>
            
      );
};

export default IncredibleIndiaAttractions;

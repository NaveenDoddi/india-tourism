import React from "react";
import { useRef, useEffect } from "react";

function Attractions() {

      const carouselRef = useRef(null);
      const scrollStep = 300; 
      const scrollInterval = 5000;
      const data = [{ "Red Fort": "https://s7ap1.scene7.com/is/image/incredibleindia/red-fort-delhi-attr-nearby?qlt=82&ts=1727352271595" }, { "The Golden Temple": "https://s7ap1.scene7.com/is/image/incredibleindia/1-sri-harmandir-sahib-(golden-temple)-amritsar-punjab-attr-nearby?qlt=82&ts=1726662259743" }, { "Shanti Stupa": "https://s7ap1.scene7.com/is/image/incredibleindia/shanti-stupa-leh-ladakh-1-attr-nearby?qlt=82&ts=1726667881441" }, { "Tulip Garden": "https://s7ap1.scene7.com/is/image/incredibleindia/tulip-garden-patnitop-attr-nearby?qlt=82&ts=1727353616756" }, { "Rohtang Pass": "https://s7ap1.scene7.com/is/image/incredibleindia/rohtang-pass-manali-himachal-pradesh-1-attr-nearby?qlt=82&ts=1726730692270" }, { "Rock Garden": "https://s7ap1.scene7.com/is/image/incredibleindia/rock-garden-chandigarh-1-attr-nearby?qlt=82&ts=1727353621313" }, { "Brahma Sarovar": "https://s7ap1.scene7.com/is/image/incredibleindia/brahma-sarovar-kurukshetra-haryana-1-attr-nearby?qlt=82&ts=1726732428341" }, { "Hawa Mahal": "https://s7ap1.scene7.com/is/image/incredibleindia/hawa-mahal-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660181235" }, { "Har Ki Pauri": "https://s7ap1.scene7.com/is/image/incredibleindia/har-ki-pauri-haridwar1-attr-nearby?qlt=82&ts=1726645912765" }, { "Taj Mahal": "https://s7ap1.scene7.com/is/image/incredibleindia/taj-mahal-agra-uttar-pradesh-1-attr-nearby?qlt=82&ts=1726650395114" }, { "Sri Jagannath Temple": "https://s7ap1.scene7.com/is/image/incredibleindia/sri-jagannath-temple-puri-odisha-1-attr-nearby?qlt=82&ts=1726663729229" }, { "Chidiya Tapu": "https://s7ap1.scene7.com/is/image/incredibleindia/chidiya-tapu-port-blair-andaman-nicobar-island-1-attr-nearby?qlt=82&ts=1726746290743" }, { "Victoria Memorial": "https://s7ap1.scene7.com/is/image/incredibleindia/victoria-memorial-kolkata-wb-1-attr-nearby?qlt=82&ts=1726644593449" }, { "Mahabodhi Temple": "https://s7ap1.scene7.com/is/image/incredibleindia/mahabodhi-temple-gaya-bihar-1-attr-nearby?qlt=82&ts=1726740857751" }, { "Anjuna Beach": "https://s7ap1.scene7.com/is/image/incredibleindia/anjuna-beach-goa-goa-anjuna-beach--goa-1-attr-nearby?qlt=82&ts=1726735611350" }, { "The Gateway of India": "https://s7ap1.scene7.com/is/image/incredibleindia/gateway-of-india-mumbai-maharashtra-1-attr-nearby?qlt=82&ts=1727355349679" }, { "Naida Caves": "https://s7ap1.scene7.com/is/image/incredibleindia/naida-caves-diu-daman-&-diu-1-attr-nearby?qlt=82&ts=1726737873659" }, { "Dwarkadhish Temple": "https://s7ap1.scene7.com/is/image/incredibleindia/dwarkadish-demple-01-attr-nearby?qlt=82&ts=1726734730355" }, { "Sanchi Stupa": "https://s7ap1.scene7.com/is/image/incredibleindia/sanchi-stupa-bhopal-madhya-pradesh-1-attr-nearby?qlt=82&ts=1726671192403" }, { "Swami Vivekananda Sarovar": "https://s7ap1.scene7.com/is/image/incredibleindia/swami-vivekananda-sarovar-raipur-chhattisgarh-1-attr-nearby?qlt=82&ts=1727011178647" }, { "Netarhat Dam": "https://s7ap1.scene7.com/is/image/incredibleindia/netarhat-dam-ranchi-jharkhand-1-attr-nearby?qlt=82&ts=1727010870342" }, { "Charminar": "https://s7ap1.scene7.com/is/image/incredibleindia/charminar-hyderabad-1-attr-nearby?qlt=82&ts=1726653048468" }, { "Virupaksha Temple": "https://s7ap1.scene7.com/is/image/incredibleindia/virupaksha-temple-hampi-karnataka-1-attr-nearby?qlt=82&ts=1726721690964" }, { "Bangaram": "https://s7ap1.scene7.com/is/image/incredibleindia/bangaram-kavaratti-lakshwadeep-1-attr-nearby?qlt=82&ts=1727011535552" }, { "Sri Venkateswara Swamy Vaari Temple": "https://s7ap1.scene7.com/is/image/incredibleindia/sri-venkateswara-swamy-vaari-temple-tirupati-andhra-pradesh-1-new-attr-nearby?qlt=82&ts=1726816667318" }, { "Shore Temple": "https://s7ap1.scene7.com/is/image/incredibleindia/1-shore-temple-mamallapuram-2-attr-nearby?qlt=82&ts=1726654619613" }, { "The French Quarter": "https://s7ap1.scene7.com/is/image/incredibleindia/the-french-quarter-puducherry-1-attr-nearby?qlt=82&ts=1726656296402" }, { "Cherai Beach": "https://s7ap1.scene7.com/is/image/incredibleindia/cherai-beach-kochi-kerala-1-attr-nearby?qlt=82&ts=1727367738936" }, { "Kamakhya Temple": "https://s7ap1.scene7.com/is/image/incredibleindia/kamakhya-temple-dispur-assam-1-attr-nearby?qlt=82&ts=1726741270303" }, { "Nohsngithiang falls": "https://s7ap1.scene7.com/is/image/incredibleindia/noh-sngithiang-falls-cherrapunjee-meghalaya-1-attr-nearby?qlt=82&ts=1727354888840" }, { "Tsomgo Lake": "https://s7ap1.scene7.com/is/image/incredibleindia/tsomgo-lake-gangtok-sikkim-1-attr-nearby?qlt=82&ts=1727355048702" }, { "Dzukou Valley": "https://s7ap1.scene7.com/is/image/incredibleindia/dzukou-valley-kohima-nagaland-1-attr-nearby?qlt=82&ts=1727012387234" }, { "Kangla Fort": "https://s7ap1.scene7.com/is/image/incredibleindia/kangla-fort-imphal-manipur-1-attr-nearby?qlt=82&ts=1727354852080" }, { "Ujjayanta Palace": "https://s7ap1.scene7.com/is/image/incredibleindia/ujjayanta-palace-agartala-tripura-1-attr-nearby?qlt=82&ts=1726651001616" }, { "Khawnglung Wildlife Sanctuary": "https://s7ap1.scene7.com/is/image/incredibleindia/khawnglung-wildlife-sanctuary-lunglei-mizoram-1-attr-nearby?qlt=82&ts=1726665885410" }, { "Tawang Monastery": "https://s7ap1.scene7.com/is/image/incredibleindia/tawang-monastery-tawang-arunachal-pradesh-1-attr-nearby?qlt=82&ts=1726743146166" }]

      useEffect(() => {
            let scrollAmount = 0;

            const autoScroll = () => {
                  if (!carouselRef.current) return;

                  // Check if we've reached the end of the carousel
                  if (scrollAmount >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth) {
                        scrollAmount = 0; // Reset scroll amount
                        carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                  } else {
                        // Scroll forward by the step amount
                        scrollAmount += scrollStep;
                        carouselRef.current.scrollBy({ left: scrollStep, behavior: 'smooth' });
                  }
            };

            const intervalId = setInterval(autoScroll, scrollInterval);

            return () => clearInterval(intervalId); // Cleanup on unmount
      }, []);

      return (
            <div>
                  <div className="inc-attractions" ref={carouselRef}>
                        {data.map((i) =>
                              <div className="div-with-shade">
                                    <div>
                                          <img src={Object.values(i)[0]} alt="" />
                                    </div>

                              </div>
                        )
                        }

                  </div>





            </div>
      )
}

export default Attractions
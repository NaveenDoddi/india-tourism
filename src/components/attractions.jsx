import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Attractions = (props) => {
      const settings = {
            centerMode: true, // Enables centering of the slides
            centerPadding: "50px", // Amount of the side slides visible (adjust as needed)
            slidesToShow: 3, // Number of slides to show in the center
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            // arrows: false, 
            responsive: [
                  {
                        breakpoint: 1024, // For medium screens
                        settings: {
                              slidesToShow: 3, // Show 3 slides
                              centerPadding: "40px", // Adjust side padding
                        },
                  },
                  {
                        breakpoint: 675, // For small screens
                        settings: {
                              slidesToShow: 2, // Show 2 slides
                              centerPadding: "30px", // Adjust side padding
                        },
                  },
                  {
                        breakpoint: 480, // For extra-small screens
                        settings: {
                              slidesToShow: 1, // Show 1 slide
                              centerPadding: "20px", // Adjust side padding
                        },
                  },
            ],
      };


      // const data = [{ "name": "Red Fort", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/red-fort-delhi-attr-nearby?qlt=82&ts=1727352271595", "URL": "https://www.incredibleindia.gov.in/en/delhi/delhi/red-fort" }, { "name": "The Golden Temple", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/1-sri-harmandir-sahib-(golden-temple)-amritsar-punjab-attr-nearby?qlt=82&ts=1726662259743", "URL": "https://www.incredibleindia.gov.in/en/delhi/delhi/red-fort" }, { "name": "Shanti Stupa", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/shanti-stupa-leh-ladakh-1-attr-nearby?qlt=82&ts=1726667881441", "URL": "https://www.incredibleindia.gov.in/en/delhi/delhi/red-fort" }, { "name": "Tulip Garden", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/tulip-garden-patnitop-attr-nearby?qlt=82&ts=1727353616756", "URL": "https://www.incredibleindia.gov.in/en/delhi/delhi/red-fort" }, { "name": "Rohtang Pass", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/rohtang-pass-manali-himachal-pradesh-1-attr-nearby?qlt=82&ts=1726730692270", "URL": "https://www.incredibleindia.gov.in/en/punjab/amritsar/sri-harmandir-sahib-golden-temple" }, { "name": "Rock Garden", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/rock-garden-chandigarh-1-attr-nearby?qlt=82&ts=1727353621313", "URL": "https://www.incredibleindia.gov.in/en/punjab/amritsar/sri-harmandir-sahib-golden-temple" }, { "name": "Brahma Sarovar", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/brahma-sarovar-kurukshetra-haryana-1-attr-nearby?qlt=82&ts=1726732428341", "URL": "https://www.incredibleindia.gov.in/en/punjab/amritsar/sri-harmandir-sahib-golden-temple" }, { "name": "Hawa Mahal", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/hawa-mahal-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660181235", "URL": "https://www.incredibleindia.gov.in/en/punjab/amritsar/sri-harmandir-sahib-golden-temple" }, { "name": "Har Ki Pauri", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/har-ki-pauri-haridwar1-attr-nearby?qlt=82&ts=1726645912765", "URL": "https://www.incredibleindia.gov.in/en/ladakh/leh/shanti-stupa" }, { "name": "Taj Mahal", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/taj-mahal-agra-uttar-pradesh-1-attr-nearby?qlt=82&ts=1726650395114", "URL": "https://www.incredibleindia.gov.in/en/ladakh/leh/shanti-stupa" }, { "name": "Sri Jagannath Temple", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/sri-jagannath-temple-puri-odisha-1-attr-nearby?qlt=82&ts=1726663729229", "URL": "https://www.incredibleindia.gov.in/en/ladakh/leh/shanti-stupa" }, { "name": "Chidiya Tapu", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/chidiya-tapu-port-blair-andaman-nicobar-island-1-attr-nearby?qlt=82&ts=1726746290743", "URL": "https://www.incredibleindia.gov.in/en/ladakh/leh/shanti-stupa" }, { "name": "Victoria Memorial", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/victoria-memorial-kolkata-wb-1-attr-nearby?qlt=82&ts=1726644593449", "URL": "https://www.incredibleindia.gov.in/en/jammu-and-kashmir/patnitop/tulip-garden" }, { "name": "Mahabodhi Temple", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/mahabodhi-temple-gaya-bihar-1-attr-nearby?qlt=82&ts=1726740857751", "URL": "https://www.incredibleindia.gov.in/en/jammu-and-kashmir/patnitop/tulip-garden" }, { "name": "Anjuna Beach", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/anjuna-beach-goa-goa-anjuna-beach--goa-1-attr-nearby?qlt=82&ts=1726735611350", "URL": "https://www.incredibleindia.gov.in/en/jammu-and-kashmir/patnitop/tulip-garden" }, { "name": "The Gateway of India", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/gateway-of-india-mumbai-maharashtra-1-attr-nearby?qlt=82&ts=1727355349679", "URL": "https://www.incredibleindia.gov.in/en/jammu-and-kashmir/patnitop/tulip-garden" }, { "name": "Naida Caves", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/naida-caves-diu-daman-&-diu-1-attr-nearby?qlt=82&ts=1726737873659", "URL": "https://www.incredibleindia.gov.in/en/himachal-pradesh/manali/rohtang-pass" }, { "name": "Dwarkadhish Temple", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/dwarkadish-demple-01-attr-nearby?qlt=82&ts=1726734730355", "URL": "https://www.incredibleindia.gov.in/en/himachal-pradesh/manali/rohtang-pass" }, { "name": "Sanchi Stupa", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/sanchi-stupa-bhopal-madhya-pradesh-1-attr-nearby?qlt=82&ts=1726671192403", "URL": "https://www.incredibleindia.gov.in/en/himachal-pradesh/manali/rohtang-pass" }, { "name": "Swami Vivekananda Sarovar", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/swami-vivekananda-sarovar-raipur-chhattisgarh-1-attr-nearby?qlt=82&ts=1727011178647", "URL": "https://www.incredibleindia.gov.in/en/himachal-pradesh/manali/rohtang-pass" }, { "name": "Netarhat Dam", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/netarhat-dam-ranchi-jharkhand-1-attr-nearby?qlt=82&ts=1727010870342", "URL": "https://www.incredibleindia.gov.in/en/chandigarh/chandigarh/rock-garden" }, { "name": "Charminar", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/charminar-hyderabad-1-attr-nearby?qlt=82&ts=1726653048468", "URL": "https://www.incredibleindia.gov.in/en/chandigarh/chandigarh/rock-garden" }, { "name": "Virupaksha Temple", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/virupaksha-temple-hampi-karnataka-1-attr-nearby?qlt=82&ts=1726721690964", "URL": "https://www.incredibleindia.gov.in/en/chandigarh/chandigarh/rock-garden" }, { "name": "Bangaram", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/bangaram-kavaratti-lakshwadeep-1-attr-nearby?qlt=82&ts=1727011535552", "URL": "https://www.incredibleindia.gov.in/en/chandigarh/chandigarh/rock-garden" }, { "name": "Sri Venkateswara Swamy Vaari Temple", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/sri-venkateswara-swamy-vaari-temple-tirupati-andhra-pradesh-1-new-attr-nearby?qlt=82&ts=1726816667318", "URL": "https://www.incredibleindia.gov.in/en/haryana/kurukshetra/brahma-sarovar" }, { "name": "Shore Temple", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/1-shore-temple-mamallapuram-2-attr-nearby?qlt=82&ts=1726654619613", "URL": "https://www.incredibleindia.gov.in/en/haryana/kurukshetra/brahma-sarovar" }, { "name": "The French Quarter", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/the-french-quarter-puducherry-1-attr-nearby?qlt=82&ts=1726656296402", "URL": "https://www.incredibleindia.gov.in/en/haryana/kurukshetra/brahma-sarovar" }, { "name": "Cherai Beach", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/cherai-beach-kochi-kerala-1-attr-nearby?qlt=82&ts=1727367738936", "URL": "https://www.incredibleindia.gov.in/en/haryana/kurukshetra/brahma-sarovar" }, { "name": "Kamakhya Temple", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/kamakhya-temple-dispur-assam-1-attr-nearby?qlt=82&ts=1726741270303", "URL": "https://www.incredibleindia.gov.in/en/rajasthan/jaipur/hawa-mahal" }, { "name": "Nohsngithiang falls", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/noh-sngithiang-falls-cherrapunjee-meghalaya-1-attr-nearby?qlt=82&ts=1727354888840", "URL": "https://www.incredibleindia.gov.in/en/rajasthan/jaipur/hawa-mahal" }, { "name": "Tsomgo Lake", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/tsomgo-lake-gangtok-sikkim-1-attr-nearby?qlt=82&ts=1727355048702", "URL": "https://www.incredibleindia.gov.in/en/rajasthan/jaipur/hawa-mahal" }, { "name": "Dzukou Valley", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/dzukou-valley-kohima-nagaland-1-attr-nearby?qlt=82&ts=1727012387234", "URL": "https://www.incredibleindia.gov.in/en/rajasthan/jaipur/hawa-mahal" }, { "name": "Kangla Fort", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/kangla-fort-imphal-manipur-1-attr-nearby?qlt=82&ts=1727354852080", "URL": "https://www.incredibleindia.gov.in/en/uttarakhand/haridwar/har-ki-pauri" }, { "name": "Ujjayanta Palace", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/ujjayanta-palace-agartala-tripura-1-attr-nearby?qlt=82&ts=1726651001616", "URL": "https://www.incredibleindia.gov.in/en/uttarakhand/haridwar/har-ki-pauri" }, { "name": "Khawnglung Wildlife Sanctuary", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/khawnglung-wildlife-sanctuary-lunglei-mizoram-1-attr-nearby?qlt=82&ts=1726665885410", "URL": "https://www.incredibleindia.gov.in/en/uttarakhand/haridwar/har-ki-pauri" }, { "name": "Tawang Monastery", "image": "https://s7ap1.scene7.com/is/image/incredibleindia/tawang-monastery-tawang-arunachal-pradesh-1-attr-nearby?qlt=82&ts=1726743146166", "URL": "https://www.incredibleindia.gov.in/en/uttarakhand/haridwar/har-ki-pauri" }]

      return (
            <div className="inc-attractions-main">
                  <div>
                        <h1>Attractions</h1>
                        <p>-- worth a thousand stories --</p>
                  </div>
                  <Slider {...settings}>
                        {props.data.map((i, index) =>
                              <div className="inc-attractions-card" key={index}>

                                    <div className="inc-attractions-image-container">
                                          <img src={i['image']} alt="" />
                                          <div className="inc-attractions-heading">
                                                {i['name']}
                                          </div>
                                    </div>

                              </div>
                        )}

                  </Slider>
            </div>
      );
};

export default Attractions;
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import styles from "@/styles/Home/slider.module.css"
import { FaComment, FaHeart, FaRegComment, FaRegHeart, FaUser } from "react-icons/fa";
import Link from "next/link";

function Testimonials({title}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const Poemdata = [
    {
      "poemid": "1",
      "title": "Prose Piece 1",
      "poem": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur consequat, nisl nisi dictum sapien, sed scelerisque felis sapien sit amet nunc. <br/> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
    },
    {
      "poemid": "2",
      "title": "Prose Piece 2",
      "poem": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. <br/> Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
    },
    {
      "poemid": "3",
      "title": "Prose Piece 3",
      "poem": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, <br/> sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    }
  ];

//   const data = [
//     {
//       id:'1',
//     name:'Dyumna',
//     course:'SPANISH (A1 & A2)',
//     desc:"Learning French has been a delightful journey! The classes are engaging, and the teachers are incredibly supportive. I love how we practice speaking through fun activities. My confidence has skyrocketed, and I can now chat with my friends in French! I can’t wait to explore more of the language.",
// },
// {
//   id:'2',
//   name:'Nipun',
//   course:'SPANISH (A1 & A2)',
//   desc:'The overall content delivery was phenomenal. The level of interaction even in an online session made the whole experience fruitful. The content itself was extremely informative and the most important part of the classes that made it different and effective was the practice of correct pronunciation. That itself is something that is hard to grasp and teach.'
// },
// {
//   id:'3',
//   name:'Prisha',
//   course:'GERMAN (A1 - B2)',
//   desc:'The Spanish foundation course with Apriori Education completely changed the way I look at learning a new language. I am thankful to be aware of how enriching, fun and lasting the knowledge of an interesting language like Spanish can be. From the first class till the last, you learn every aspect of its practicality when you come around to speaking it.'
// },
// {
//   id:'4',
//   name:'Aparna',
//   course:'FRENCH (A1 & A2)',
//   desc:"Learning French has been a delightful journey! The classes are engaging, and the teachers are incredibly supportive. I love how we practice speaking through fun activities. My confidence has skyrocketed, and I can now chat with my friends in French! I can’t wait to explore more of the language."
// },
// {
//   id:'9',
//   name:'PRISHA',
//   course:'FRENCH (A1 & A2)',
//   desc:"I took the French course to enhance my travel experiences. The practical vocabulary and phrases I learned were invaluable during my recent trip to Paris! The classes are interactive and filled with cultural insights. I came back with not just memories, but a desire to continue learning. Truly enriching!"
// },
// {
//   id:'10',
//   name:'KUSHIK',
//   course:'FRENCH (A1)',
//   desc:"Starting from scratch, I was nervous about learning French. But the friendly environment and supportive peers made it enjoyable. The lessons were very engaging, making it easy to remember new words. I can now introduce myself confidently in French, and I'm excited to learn more!"
// },
// {
//   id:'11',
//   name:'JAIRAJ',
//   course:'FRENCH (A1 - B1)',
//   desc:"French has become a passion for me! The advanced-level classes challenge me to think critically about language nuances. The instructors are knowledgeable and encourage us to explore literature and culture. I’m now preparing for a study abroad program in France, and I feel well-prepared thanks to this course."
// },
// {
//   id:'12',
//   name:'Isha',
//   course:'SPANISH (A1 - B1)',
//   desc:"Spanish has opened up a whole new world for me! The advanced course has deepened my understanding of the language and culture. The discussions on literature and history are fascinating. I feel confident speaking with native speakers now, and I’m excited to travel to Spain soon!"
// },
// {
//   id:'5',
//   name:'Sanyam',
//   course:'SPANISH (A1)',
//   desc:"Learning Spanish through this course has been a rewarding experience. The instructors are patient and accommodating, and they make complex topics manageable. I enjoyed the group discussions and cultural activities, which made learning more relatable. I feel confident discussing my work in Spanish now!"
// },
// ]


  return (
    <div className={styles.slidercontainer}>
      <div className={styles.heading}>
        <div className={styles.heading1}>{title}</div>
      </div>
      <Slider className={styles.slider} {...settings}>

        {Poemdata.splice(0,8).map(data=><div key={data.poemid} className={styles.cardcontainer}>
        <div className={styles.card}>
          <div className={styles.imgcontainer}>
            <div className={styles.img}>
              <FaUser className={styles.icon}/>
            </div>
            <div>
            <div className={styles.name}>{data.title}</div>
            </div>
          </div>
          <div>
            <div className={styles.description}>
               {data.poem.slice(0, 200).split("<br/>").map((line, index) => (
                              <React.Fragment key={index}>
                                  {line}
                                  <br />
                              </React.Fragment>
                          ))}
                </div>
                <div className={styles.flex6}>
          <div className={styles.iconWrapper}>
            <FaRegHeart className={styles.outlineIcon} />
            <FaHeart className={styles.solidIcon} />
          </div>
          <div className={styles.iconWrapper}>
            <FaRegComment className={styles.outlineIcon} />
            <FaComment className={styles.solidIcon} />
          </div>
        </div>

        <Link href={`/Prose/${data.poemid}`} className={styles.text1}>
          Read more
        </Link>

          </div>
        </div>
        </div>)}
      </Slider>
    </div>
  );
}

export default Testimonials;

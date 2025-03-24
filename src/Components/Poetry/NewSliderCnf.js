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
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
      "title": "Creative Non-Fiction 1",
      "poem": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur consequat, nisl nisi dictum sapien, sed scelerisque felis sapien sit amet nunc. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    },
    {
      "poemid": "2",
      "title": "Creative Non-Fiction 2",
      "poem": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur consequat, nisl nisi dictum sapien, sed scelerisque felis sapien sit amet nunc. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
    },
    {
      "poemid": "3",
      "title": "Creative Non-Fiction 3",
      "poem": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur consequat, nisl nisi dictum sapien, sed scelerisque felis sapien sit amet nunc. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur consequat, nisl nisi dictum sapien, sed scelerisque felis sapien sit amet nunc. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
    }
  ];


  return (
    <div className={styles.slidercontainer}>
      <div className={styles.heading}>
        <div className={styles.heading1}>{title}</div>
      </div>
      <Slider className={styles.slider} {...settings}>

        {Poemdata.splice(0,8).map(data=><div className={styles.cardcontainer}>
        <div className={styles.cardcnf}>
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

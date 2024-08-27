/* eslint-disable @next/next/no-img-element */
import { textCutter, timeCounter } from '@/helpers';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

export const FourUp = ({title}: any) => {
  return (
    <>
      <h3 className="container four-up--title">{title}</h3>
      <section className="blog_four-up container">
        <div className="blog_four-up--main-article">
          <img
            className="blog_four-up--main-article--img"
            src="https://png.pngtree.com/thumb_back/fh260/background/20220313/pngtree-large-warehouse-product-warehouse-of-a-factory-image_997557.jpg"
            alt=""
          />
          <div className="blog_four-up--main-article--author">
            <img
              src="https://ik.imagekit.io/roiotve1b/huecker/zach.jpeg"
              alt=""
            />
            <p>
                  By <strong>Zach Huecker</strong>
            </p>
            <div className="bullet"></div>
            <p>10 hours ago</p>
          </div>
          <div className="blog_four-up--main-article--title">
            <h3>
                  Trucking Industry Forecast 2024: A conversation with our drivers
            </h3>
          </div>
          <div className="blog_four-up--main-article--body">
            <p>
              {textCutter(
                'Trucking is a vital part of the American economy. It is the primary way that goods are transported across the country. The trucking industry is expected to grow in the coming years, and this growth will be driven by a number of factors. In this article, we will discuss the trucking industry forecast for 2024 and beyond, and we will talk to some of our drivers about their experiences on the road.',
                200,
              )}
            </p>
          </div>
          <div className="blog_four-up--main-article--cta">
            <div className="readmore">
                  Read Article
              <span>
                <FaArrowRightLong />
              </span>
            </div>
          </div>
        </div>
        <div className="blog_four-up--side-articles">
          <Link href='' className="blog_four-up--side-articles--article">
            <div className="blog_four-up--side-articles--article--img">
              <img
                src="https://www.thebrimichgroup.com/wp-content/uploads/2023/07/Trucking-Rates.jpg"
                alt=""
              />
            </div>
            <div className="blog_four-up--side-articles--article--content">
              <div className="blog_four-up--side-articles--article--content--author">
                <img
                  src="https://ik.imagekit.io/roiotve1b/huecker/zach.jpeg"
                  alt=""
                />
                <p>
                      By <strong>Zach Huecker</strong>
                </p>
                <p>{timeCounter(new Date('2023/08/15'))}</p>
              </div>
              <div className="blog_four-up--side-articles--article--content--title">
                <h3>
                      Loading & Unloading trucks: Safety tips for truck drivers
                </h3>
              </div>
              <div className="blog_four-up--side-articles--article--content--body">
                <p>
                      Loading and unloading trucks is a critical task for truck
                      drivers, and it's important to prioritize safety. Here are
                      some essential safety tips to keep in mind:
                </p>
              </div>
              <div className="blog_four-up--side-articles--article--content--cta">
                <div className='readmore'>
                      Read Article
                  <span>
                    <FaArrowRightLong />
                  </span>
                </div>
              </div>
            </div>
          </Link>
          <Link href={''} className="blog_four-up--side-articles--article">
            <div className="blog_four-up--side-articles--article--img">
              <img
                src="https://i.ytimg.com/vi/sEFUmtPYApA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBr7F4c3EQVFfO4LjTa_qYGPIFBEA"
                alt=""
              />
            </div>
            <div className="blog_four-up--side-articles--article--content">
              <div className="blog_four-up--side-articles--article--content--author">
                <img
                  src="https://ik.imagekit.io/roiotve1b/huecker/zach.jpeg"
                  alt=""
                />
                <p>
                      By <strong>Zach Huecker</strong>
                </p>
                <p>{timeCounter(new Date('2024/08/11'))}</p>
              </div>
              <div className="blog_four-up--side-articles--article--content--title">
                <h3>
                      Loading & Unloading trucks: Safety tips for truck drivers
                </h3>
              </div>
              <div className="blog_four-up--side-articles--article--content--body">
                <p>
                      Loading and unloading trucks is a critical task for truck
                      drivers, and it's important to prioritize safety. Here are
                      some essential safety tips to keep in mind:
                </p>
              </div>
              <div className="blog_four-up--side-articles--article--content--cta">
                <div className='readmore'>
                      Read Article
                  <span>
                    <FaArrowRightLong />
                  </span>
                </div>
              </div>
            </div>
          </Link>
          <Link href={'/'} className="blog_four-up--side-articles--article">
            <div className="blog_four-up--side-articles--article--img">
              <img
                src="https://ironhorsetransportinc.com/wp-content/uploads/2018/12/forklift-unloading-truck.jpg"
                alt=""
              />
            </div>
            <div className="blog_four-up--side-articles--article--content">
              <div className="blog_four-up--side-articles--article--content--author">
                <img
                  src="https://ik.imagekit.io/roiotve1b/huecker/zach.jpeg"
                  alt=""
                />
                <p>
                      By <strong>Zach Huecker</strong>
                </p>
                <p>{timeCounter(new Date())}</p>
              </div>
              <div className="blog_four-up--side-articles--article--content--title">
                <h3>
                      Loading & Unloading trucks: Safety tips for truck drivers
                </h3>
              </div>
              <div className="blog_four-up--side-articles--article--content--body">
                <p>
                      Loading and unloading trucks is a critical task for truck
                      drivers, and it's important to prioritize safety. Here are
                      some essential safety tips to keep in mind:
                </p>
              </div>
              <div className="blog_four-up--side-articles--article--content--cta">
                <div className='readmore'>
                      Read Article
                  <span>
                    <FaArrowRightLong />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

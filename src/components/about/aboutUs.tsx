import React from 'react'
import Container from '../ui/Container'
import ImageComp from '../ui/Image'

export default function AboutUs() {
  return (
    <section className="pt-20 about relative">
      <Container>
        <div className="grid lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2">
            <h1 className="text-color2 lg:text-8xl md:text-6xl text-4xl font-bold pb-4">
              1+ Years of Experience
            </h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable. If you are going to use a passage Lorem Ipsum
              available, but the majority.
            </p>
          </div>
          <div className="lg:col-span-1">
            <div className="vedio relative">
              <ImageComp
                imageName="/projects/blog-website.png"
                alt={''}
                height={480}
                width={720}
                class_name="rounded-lg"
              />
              <a id="play-video" className="video-play-button" href="#">
                <span></span>
              </a>
            </div>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered Lorem Ipsum available, but the
              majority.
            </p>
            {/* <div className="stats flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-semibold text-color2">
                  1650 +
                </span>
                <span className="text">
                  Complete <br /> Project
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-semibold text-color2">
                  502 +
                </span>
                <span className="text">
                  Happy <br /> Customers
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-semibold text-color2">98%</span>
                <span className="text">
                  Client <br /> Satisfied
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </Container>
    </section>
  )
}

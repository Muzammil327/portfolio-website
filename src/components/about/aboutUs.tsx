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
              With over a year of hands-on experience, I have honed my skills in
              developing dynamic and responsive web applications. My journey as
              a developer has been driven by a passion for crafting efficient
              and scalable solutions. My expertise lies in integrating MongoDB,
              Express.js, React, and Node.js to deliver high-quality, end-to-end
              solutions.
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
              {/* <a id="play-video" className="video-play-button" href="#">
                <span></span>
              </a> */}
            </div>
            <p>
              As a dedicated MERN stack developer, I specialize in creating
              full-stack applications that not only meet but exceed client
              expectations.
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

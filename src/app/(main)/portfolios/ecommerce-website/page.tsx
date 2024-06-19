import React from 'react'
import MainHero from '@/src/components/hero/MainHero'
import Container from '@/src/components/ui/Container'
import SkillCard from '@/src/components/skill/skillCard'
import HTML5 from '@/src/components/svg/html'
import CSS3 from '@/src/components/svg/css'
import SCSS from '@/src/components/svg/scss'
import TailwindCSS from '@/src/components/svg/tailwindCss'
import Typescript from '@/src/components/svg/ts'
import ReactJs from '@/src/components/svg/react'
import NextJs from '@/src/components/svg/next'
import Git from '@/src/components/svg/git'
import Github from '@/src/components/svg/github'
import Nodejs from '@/src/components/svg/nodejs'
import Javascript from '@/src/components/svg/js'
import Expressjs from '@/src/components/svg/expressjs'
import Mongodb from '@/src/components/svg/mongodb'
import Vercel from '@/src/components/svg/vercel'
import Cloudinary from '@/src/components/svg/cloudinary'

export default function page() {
  return (
    <main>
      <MainHero head="Ecommerce Project" para="" />
      <section>
        <Container>
          <h2 className="md:text-2xl text-lg font-semibold py-1">Features:</h2>
          <ul className="mb-5 list-disc">
            <li className="py-2 text-lg">User and Admin Roles.</li>
            <li className="py-2 text-lg">
              <span>Responsive Design and Accessibility:</span> I prioritize
              accessibility and responsive design principles to ensure that
              users can enjoy a consistent and optimized shopping experience
              across various devices and screen sizes.
            </li>
            <span className="text-red-500 text-lg py-2">Admin:</span>
            <li className="py-2 text-lg">
              <strong>Product Management:</strong> I have successfully
              implemented solutions for managing product catalogs, including
              features such as product listing, categorization, and detailed
              product pages that enhance user engagement and conversion rates.
            </li>
            <li className="py-2 text-lg">
              <strong>User Management:</strong> I am adept at developing user
              authentication systems, user profiles, and account management
              functionalities. I prioritize security and usability, ensuring
              smooth registration, login processes, and personalized user
              experiences.
            </li>
            <li className="py-2 text-lg">
              <strong>Order Processing:</strong> I have designed and integrated
              order management systems that streamline the entire order
              lifecycle—from placement.
            </li>
            <li className="py-2 text-lg">
              <strong>Wishlist and Cart Management:</strong> I have implemented
              efficient tools for monitoring and managing user wishlists and
              shopping carts. This includes real-time monitoring of wishlist
              items across the platform, providing actionable insights for
              targeted marketing strategies and enhancing user retention rates.
            </li>
            <li className="py-2 text-lg">
              <strong>Mobile-Friendly Admin Dashboard:</strong> Ensuring that
              all administrative tools and dashboards are fully responsive and
              optimized for mobile devices, allowing admins to manage the
              platform on-the-go.
            </li>
            <span className="text-red-500 text-lg py-2">User:</span>
            <li className="py-2 text-lg">
              <strong>Add to Cart:</strong> Users can easily add desired
              products to their shopping cart with a single click. This
              streamlined process enhances convenience and encourages
              spontaneous purchasing decisions.
            </li>
            <li className="py-2 text-lg">
              <strong>Add to Wishlist:</strong> Allowing users to add products
              to their personal wishlist, facilitating easy access and future
              consideration, and supporting personalized shopping experiences.
            </li>
            <li className="py-2 text-lg">
              <strong>Like and Dislike Product:</strong> Implementing
              interactive features that allow users to express their preferences
              for products, enhancing user engagement and enabling personalized
              product recommendations based on user preferences.
            </li>
            <li className="py-2 text-lg">
              <strong>Place Order:</strong> Providing seamless purchase
              transactions with secure payment gateways and efficient order
              processing systems, ensuring a smooth checkout process and timely
              delivery of products.
            </li>
            <li className="py-2 text-lg">
              <strong>Catalogue:</strong> Optimizing product browsing through
              comprehensive catalog management, including advanced filtering and
              sorting options based on various criteria such as price, catgeory,
              and enhancing user navigation and satisfaction.
            </li>
            <li className="py-2 text-lg">
              <strong>Responsive Design:</strong> Ensuring that the entire
              e-commerce platform is mobile-friendly, providing users with a
              consistent and optimized shopping experience across various
              devices and screen sizes.
            </li>
            <li className="py-2 text-lg">
              <strong>Continuous Improvement:</strong> Regularly updating and
              refining the platform based on user feedback and analytics to
              ensure that it remains responsive to evolving user preferences and
              industry trends.
            </li>
          </ul>
          <h2 className="md:text-2xl text-lg font-semibold py-1">Frontend:</h2>
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 sm:py-6">
            <SkillCard icon={<HTML5 />} title="HTML5" />
            <SkillCard icon={<CSS3 />} title="CSS3" />
            <SkillCard icon={<SCSS />} title="SCSS" />
            <SkillCard icon={<TailwindCSS />} title="Tailwind CSS" />
            <SkillCard icon={<Typescript />} title="Typescript" />
            <SkillCard icon={<ReactJs />} title="React JS" />
            <SkillCard icon={<NextJs />} title="Next JS" />
            <SkillCard image="/nextAuth.png" title="Next Auth" />
          </div>
          <h2 className="md:text-2xl text-lg font-semibold py-1">Backend:</h2>
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 sm:py-6">
            <SkillCard icon={<Javascript />} title="Javascript" />
            <SkillCard icon={<Nodejs />} title="Node JS" />
            <SkillCard icon={<Expressjs />} title="Express JS" />
            <SkillCard icon={<Mongodb />} title="Mongo DB" />
          </div>
          <h2 className="md:text-2xl text-lg font-semibold py-1">Tools:</h2>
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 sm:py-6">
            <SkillCard icon={<Git />} title="Git" />
            <SkillCard icon={<Github />} title="Github" />
            <SkillCard icon={<Cloudinary />} title="Cloudinary" />
          </div>
          <h2 className="md:text-2xl text-lg font-semibold py-1">
            Deployment:
          </h2>
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 sm:py-6">
            <SkillCard icon={<Vercel />} title="Vercel" />
          </div>
          <h2 className="md:text-2xl text-lg font-semibold py-1">Package:</h2>
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 sm:py-6">
            <SkillCard title="axios" />
            <SkillCard title="bcrypt" />
            <SkillCard title="mongoose" />
            <SkillCard title="react-icons" />
            <SkillCard title="react-share" />
            <SkillCard title="swiper" />
            <SkillCard title="react-tagsinput" />
            <SkillCard title="react-select" />
          </div>
        </Container>
      </section>
    </main>
  )
}

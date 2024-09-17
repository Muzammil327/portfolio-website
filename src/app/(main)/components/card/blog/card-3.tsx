import TabbedCard from '@/src/components/TabbedCard'
import Image from 'next/image'

const BlogCard3 = () => {
  const BlogCardComponent = () => (
    <section className="bg-gray-900 py-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 relative lg:px-8 md:px-6 sm:px-4 px-2 container mx-auto">
      <div className="bg-gray-800 px-4 py-4 rounded-md relative">
        <div className="">
          <Image
            src="/sample.png"
            alt=""
            className="rounded-md"
            height={500}
            width={500}
          />
          <div className="absolute top-6 right-6">
            <span className="bg-white text-black py-1 px-2 rounded-full text-sm">
              Web Design
            </span>
          </div>
        </div>
        <div className="mt-3 text-white">
          <div className="mb-1">
            <span className="text-sm">January 20, 2022</span>
          </div>
          <h3 className="sm:text-xl text-lg mb-2">
            100+ Best Premium Blog Cards Designs
          </h3>
          <p className="text-sm text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, fuga?
          </p>
          <a
            href="/"
            className="mt-3 bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center transition-all ease-in-out duration-300 hover:scale-110"
          >
            <div className="flex items-center justify-center">+</div>
          </a>
        </div>
      </div>
      <div className="bg-gray-800 px-4 py-4 rounded-md relative">
        <div className="">
          <Image
            src="/sample.png"
            alt=""
            className="rounded-md"
            height={500}
            width={500}
          />
          <div className="absolute top-6 right-6">
            <span className="bg-white text-black py-1 px-2 rounded-full text-sm">
              Development
            </span>
          </div>
        </div>
        <div className="mt-3 text-white">
          <div className="mb-1">
            <span className="text-sm">January 20, 2022</span>
          </div>
          <h3 className="sm:text-xl text-lg mb-2">
            100+ Best Premium Blog Cards Designs
          </h3>
          <p className="text-sm text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, fuga?
          </p>
          <a
            href="/"
            className="mt-3 bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center transition-all ease-in-out duration-300 hover:scale-110"
          >
            <div className="flex items-center justify-center">+</div>
          </a>
        </div>
      </div>
      <div className="bg-gray-800 px-4 py-4 rounded-md relative">
        <div className="">
          <Image
            src="/sample.png"
            alt=""
            className="rounded-md"
            height={500}
            width={500}
          />
          <div className="tag absolute top-6 right-6">
            <span className="bg-white text-black py-1 px-2 rounded-full text-sm">
              UI/UX
            </span>
          </div>
        </div>
        <div className="mt-3 text-white">
          <div className="mb-1">
            <span className="text-sm">January 20, 2022</span>
          </div>
          <h3 className="sm:text-xl text-lg mb-2">
            100+ Best Premium Blog Cards Designs
          </h3>
          <p className="text-sm text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, fuga?
          </p>
          <a
            href="/"
            className="mt-3 bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center transition-all ease-in-out duration-300 hover:scale-110"
          >
            <div className="flex items-center justify-center">+</div>
          </a>
        </div>
      </div>
    </section>
  )

  const sampleCode = `
    <section className="bg-gray-900 py-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 relative lg:px-8 md:px-6 sm:px-4 px-2 container mx-auto">
      <div className="bg-gray-800 px-4 py-4 rounded-md">
        <div className="image">
          <Image
            src="/sample.png"
            alt=""
            className="rounded-md"
            height={500}
            width={500}
          />
          <div className="tag absolute top-3 right-2">
            <span className="bg-white text-black py-1 px-2 rounded-full text-sm">
              Web Design
            </span>
          </div>
        </div>
        <div className="mt-3 text-white">
          <div className="mb-1">
            <span className="text-sm">January 20, 2022</span>
          </div>
          <h3 className="sm:text-xl text-lg mb-2">
            100+ Best Premium Blog Cards Designs
          </h3>
          <p className="text-sm text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, fuga?
          </p>
          <a
            href="/"
            className="mt-3 bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center transition-all ease-in-out duration-300 hover:scale-110"
          >
            <div className="flex items-center justify-center">+</div>
          </a>
        </div>
      </div>
      <div className="bg-gray-800 px-4 py-4 rounded-md">
        <div className="image">
          <Image
            src="/sample.png"
            alt=""
            className="rounded-md"
            height={500}
            width={500}
          />
          <div className="tag absolute top-3 right-2">
            <span className="bg-white text-black py-1 px-2 rounded-full text-sm">
              Development
            </span>
          </div>
        </div>
        <div className="mt-3 text-white">
          <div className="mb-1">
            <span className="text-sm">January 20, 2022</span>
          </div>
          <h3 className="sm:text-xl text-lg mb-2">
            100+ Best Premium Blog Cards Designs
          </h3>
          <p className="text-sm text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, fuga?
          </p>
          <a
            href="/"
            className="mt-3 bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center transition-all ease-in-out duration-300 hover:scale-110"
          >
            <div className="flex items-center justify-center">+</div>
          </a>
        </div>
      </div>
      <div className="bg-gray-800 px-4 py-4 rounded-md">
        <div className="image">
          <Image
            src="/sample.png"
            alt=""
            className="rounded-md"
            height={500}
            width={500}
          />
          <div className="tag absolute top-3 right-2">
            <span className="bg-white text-black py-1 px-2 rounded-full text-sm">
              UI/UX
            </span>
          </div>
        </div>
        <div className="mt-3 text-white">
          <div className="mb-1">
            <span className="text-sm">January 20, 2022</span>
          </div>
          <h3 className="sm:text-xl text-lg mb-2">
            100+ Best Premium Blog Cards Designs
          </h3>
          <p className="text-sm text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, fuga?
          </p>
          <a
            href="/"
            className="mt-3 bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center transition-all ease-in-out duration-300 hover:scale-110"
          >
            <div className="flex items-center justify-center">+</div>
          </a>
        </div>
      </div>
    </section>
  `

  return (
    <TabbedCard
      title="Blog Card 3"
      component={<BlogCardComponent />}
      sampleCode={sampleCode}
    />
  )
}

export default BlogCard3

import Image from 'next/image'
import TabbedCard from '@/src/components/TabbedCard'

const LinkCard1 = () => {
  const BlogCardComponent = () => (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 py-10 gap-4 bg-gray-200 max-h-screen">
      <div className="bg-white shadow-md hover:shadow-sm transition-all ease-in-out rounded-xl p-6 mb-6">
        <div className="body">
          <h4 className="mb-1 block font-sans text-lg font-semibold tracking-normal text-gray-900 antialiased">
            Frontend Developer
          </h4>
          <p className="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            nisi ratione veniam, suscipit labore impedit voluptas alias earum
            repellat quis?
          </p>
        </div>
        <div className="button mt-4">
          <button
            className="rounded-md bg-indigo-500 py-2 px-4 text-center font-sans text-base font-semibold text-white"
            type="button"
            data-ripple-light="true"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="bg-white shadow-md hover:shadow-sm transition-all ease-in-out rounded-xl p-6 mb-6">
        <div className="body">
          <h4 className="mb-1 block font-sans text-lg font-semibold tracking-normal text-gray-900 antialiased">
            Backend Developer
          </h4>
          <p className="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            nisi ratione veniam, suscipit labore impedit voluptas alias earum
            repellat quis?
          </p>
        </div>
        <div className="button mt-4">
          <button
            className="rounded-md bg-indigo-500 py-2 px-4 text-center font-sans text-base font-semibold text-white"
            type="button"
            data-ripple-light="true"
          >
            Read More
          </button>
        </div>
      </div>

      <div className="bg-white shadow-md hover:shadow-sm transition-all ease-in-out rounded-xl p-6 mb-6">
        <div className="body">
          <h4 className="mb-1 block font-sans text-lg font-semibold tracking-normal text-gray-900 antialiased">
            Graphic Designer
          </h4>
          <p className="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            nisi ratione veniam, suscipit labore impedit voluptas alias earum
            repellat quis?
          </p>
        </div>
        <div className="button mt-4">
          <button
            className="rounded-md bg-indigo-500 py-2 px-4 text-center font-sans text-base font-semibold text-white"
            type="button"
            data-ripple-light="true"
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  )

  const sampleCode = `
  <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 py-10 gap-4 bg-gray-200 max-h-screen">
      <div className="bg-white shadow-md hover:shadow-sm transition-all ease-in-out rounded-xl p-6 mb-6">
        <div className="body">
          <h4 className="mb-1 block font-sans text-lg font-semibold tracking-normal text-gray-900 antialiased">
            Frontend Developer
          </h4>
          <p className="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            nisi ratione veniam, suscipit labore impedit voluptas alias earum
            repellat quis?
          </p>
        </div>
        <div className="button mt-4">
          <button
            className="rounded-md bg-indigo-500 py-2 px-4 text-center font-sans text-base font-semibold text-white"
            type="button"
            data-ripple-light="true"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="bg-white shadow-md hover:shadow-sm transition-all ease-in-out rounded-xl p-6 mb-6">
        <div className="body">
          <h4 className="mb-1 block font-sans text-lg font-semibold tracking-normal text-gray-900 antialiased">
            Backend Developer
          </h4>
          <p className="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            nisi ratione veniam, suscipit labore impedit voluptas alias earum
            repellat quis?
          </p>
        </div>
        <div className="button mt-4">
          <button
            className="rounded-md bg-indigo-500 py-2 px-4 text-center font-sans text-base font-semibold text-white"
            type="button"
            data-ripple-light="true"
          >
            Read More
          </button>
        </div>
      </div>

      <div className="bg-white shadow-md hover:shadow-sm transition-all ease-in-out rounded-xl p-6 mb-6">
        <div className="body">
          <h4 className="mb-1 block font-sans text-lg font-semibold tracking-normal text-gray-900 antialiased">
            Graphic Designer
          </h4>
          <p className="block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            nisi ratione veniam, suscipit labore impedit voluptas alias earum
            repellat quis?
          </p>
        </div>
        <div className="button mt-4">
          <button
            className="rounded-md bg-indigo-500 py-2 px-4 text-center font-sans text-base font-semibold text-white"
            type="button"
            data-ripple-light="true"
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  `

  return (
    <TabbedCard
      title="Link Card 1"
      component={<BlogCardComponent />}
      sampleCode={sampleCode}
    />
  )
}

export default LinkCard1

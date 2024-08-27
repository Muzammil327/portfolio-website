import TabbedCard from '@/src/components/TabbedCard'
import Image from 'next/image'

const BlogCard2 = () => {
  const BlogCardComponent = () => (
    <section className="grid md:grid-cols-2 grid-cols-1 gap-4 items-center container mx-auto px-5 py-10 bg-pink-50">
      <div className="cards bg-white p-2 rounded-t-3xl shadow-md">
        <div className="relative">
          <Image
            src="/sample.png"
            className="w-full rounded-t-3xl max-h-96 object-center h-auto"
            alt="Main Image"
            height={400}
            width={400}
          />
          <Image
            src="/hero_img.jpg"
            className="h-[70px] w-[70px] border-2 border-white rounded-full absolute -bottom-8 right-6 shadow-2xl"
            alt="Author Image"
            height={100}
            width={100}
          />
        </div>
        <div className="p-4">
          <h3 className="my-4 text-2xl font-semibold leading-8 tracking-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            omnis?
          </h3>
          <p className="text-base text-gray-500 leading-7 tracking-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
            tenetur delectus? Quia impedit iste in aliquam nulla tenetur
            repellat reiciendis.
          </p>
          <div className="flex items-center gap-5 pt-6 text-base text-gray-500">
            <span>
              By{' '}
              <span className="border-b border-dotted border-red-300">
                Muzammil
              </span>
            </span>
            <span>Feb 14, 2023</span>
          </div>
        </div>
      </div>
      <div className="cards bg-white p-2 rounded-t-3xl shadow-md">
        <div className="relative">
          <Image
            src="/sample.png"
            className="w-full rounded-t-3xl max-h-96 object-center h-auto"
            alt="Main Image"
            height={400}
            width={400}
          />
          <Image
            src="/hero_img.jpg"
            className="h-[70px] w-[70px] border-2 border-white rounded-full absolute -bottom-8 right-6 shadow-2xl"
            alt="Author Image"
            height={100}
            width={100}
          />
        </div>
        <div className="p-4">
          <h3 className="my-4 text-2xl font-semibold leading-8 tracking-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            omnis?
          </h3>
          <p className="text-base text-gray-500 leading-7 tracking-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
            tenetur delectus? Quia impedit iste in aliquam nulla tenetur
            repellat reiciendis.
          </p>
          <div className="flex items-center gap-5 pt-6 text-base text-gray-500">
            <span>
              By{' '}
              <span className="border-b border-dotted border-red-300">
                Muzammil
              </span>
            </span>
            <span>Feb 14, 2023</span>
          </div>
        </div>
      </div>
    </section>
  )

  const sampleCode = `
 <section className="grid md:grid-cols-2 grid-cols-1 gap-4 items-center container mx-auto px-5 py-10 bg-pink-50">
      <div className="cards bg-white p-2 rounded-t-3xl shadow-md">
        <div className="relative">
          <Image
            src="/sample.png"
            className="w-full rounded-t-3xl max-h-96 object-center h-auto"
            alt="Main Image"
            height={400}
            width={400}
          />
          <Image
            src="/hero_img.jpg"
            className="h-[70px] w-[70px] border-2 border-white rounded-full absolute -bottom-8 right-6 shadow-2xl"
            alt="Author Image"
            height={100}
            width={100}
          />
        </div>
        <div className="p-4">
          <h3 className="my-4 text-2xl font-semibold leading-8 tracking-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            omnis?
          </h3>
          <p className="text-base text-gray-500 leading-7 tracking-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
            tenetur delectus? Quia impedit iste in aliquam nulla tenetur
            repellat reiciendis.
          </p>
          <div className="flex items-center gap-5 pt-6 text-base text-gray-500">
            <span>
              By{' '}
              <span className="border-b border-dotted border-red-300">
                Muzammil
              </span>
            </span>
            <span>Feb 14, 2023</span>
          </div>
        </div>
      </div>
      <div className="cards bg-white p-2 rounded-t-3xl shadow-md">
        <div className="relative">
          <Image
            src="/sample.png"
            className="w-full rounded-t-3xl max-h-96 object-center h-auto"
            alt="Main Image"
            height={400}
            width={400}
          />
          <Image
            src="/hero_img.jpg"
            className="h-[70px] w-[70px] border-2 border-white rounded-full absolute -bottom-8 right-6 shadow-2xl"
            alt="Author Image"
            height={100}
            width={100}
          />
        </div>
        <div className="p-4">
          <h3 className="my-4 text-2xl font-semibold leading-8 tracking-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            omnis?
          </h3>
          <p className="text-base text-gray-500 leading-7 tracking-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
            tenetur delectus? Quia impedit iste in aliquam nulla tenetur
            repellat reiciendis.
          </p>
          <div className="flex items-center gap-5 pt-6 text-base text-gray-500">
            <span>
              By{' '}
              <span className="border-b border-dotted border-red-300">
                Muzammil
              </span>
            </span>
            <span>Feb 14, 2023</span>
          </div>
        </div>
      </div>
    </section>
  `

  return (
    <TabbedCard
      title="Blog Card 2"
      component={<BlogCardComponent />}
      sampleCode={sampleCode}
    />
  )
}

export default BlogCard2

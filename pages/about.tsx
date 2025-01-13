import Image from "next/image";

const About = () => {
  return (
    <section>
      <div className="max-width-container mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-5 py-10 lg:py-16 gap-3 lg:gap-8">

          <div className="flex lg:col-span-2 gap-6 justify-center">
            <Image src="/assets/images/about/1.jpg" alt="باغ زیتون" width={200} height={450} className="max-w-full h-60 lg:h-450 object-cover object-top" />
            <Image src="/assets/images/about/2.jpg" alt="باغ زیتون" width={200} height={450} className="max-w-full h-60 lg:h-450 lg:mt-14 object-cover object-top" />
          </div>

          <div className="lg:col-span-3 mt-6 lg:mt-14 text-justify">
            <h2 className="mb-6 font-bold text-lg lg:text-2xl"> درباره باغ زیتون </h2>
            <p className="mb-4">
              باغ زیتون به تازگی فعالیتش رو تو عرضه محصولات طبیعی و ارگانیک شروع کرده.
            </p>
            <p className="mb-4">
              ما داریم تلاش میکنیم که تمام هموطنان عزیزمون در سراسر ایران بتونن به محصولات با کیفیت و بدون مواد شیمیایی دسترسی داشته باشن.
            </p>
            <p className="mb-4">
              محصولات باغ زیتون ما شامل زیتون، انواع روغن زیتون و صابون زیتون هست
            </p>
            <p className="mb-4">
              ما تو باغ زیتون داریم تلاش می کنیم که با حذف واسطه محصول دستکاری نشده رو به شما عرضه کنیم
            </p>
            <p>
              ما تو این راه به حمایت شما نیاز داریم 😊
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
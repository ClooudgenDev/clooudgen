import Hero from "@/components/shared/hero/Hero";
import ItSupportImage from '@/assets/hero/itSupport.gif';
const ItSupport = () => {

    return (
        <section className="relative my-10 md:my-20 min-h-[700px] overflow-hidden p-3">
            <div
                className="absolute inset-0 z-0 bg-center bg-cover opacity-5"
                style={{ backgroundImage: `url(./shapes.png)` }}
            ></div>
            <div className="relative z-30">
                <h2 className="my-8 text-center section-heading">
                    Total IT support from Florida, USA
                </h2>
                <Hero className={'md:grid-cols-1 lg:grid-cols-2 '}  media={ItSupportImage}>
                    <div className="space-y-2 text-justify md:text-lg">
                        <p>
                            Clooud Gen provides your one-stop solution for all IT needs. From
                            development to deployment, marketing, and{' '}
                            <a href="/maintenance" className="underline text-primary">
                                maintenance
                            </a>
                            , we&apos;ve got you covered. Our services encompass custom{' '}
                            <a href="/web-development" className="underline text-primary">
                                web
                            </a>{' '}
                            and{' '}
                            <a href="/app-development" className="underline text-primary">
                                app
                            </a>{' '}
                            development, ensuring your digital presence is robust and
                            effective. We offer expert IT consulting, guiding you through the
                            complexities of technology to strategically elevate your business.
                            With our subscription-based{' '}
                            <a href="/#" className="underline text-primary">
                                remote IT team service
                            </a>
                            , you can build a{' '}
                            <a href="/team" className="underline text-primary">
                                dedicated IT team
                            </a>{' '}
                            tailored to your requirements, providing flexibility and
                            expertise.{' '}
                            <a href="/team" className="underline text-primary">
                                How to works our dedicated IT team?
                            </a>
                        </p>
                        <p>
                            Our robust web and app maintenance services include content
                            uploads, bug fixing, speed optimization, security enhancements,
                            and round-the-clock monitoring. We ensure your platforms run
                            smoothly and securely. Additionally, our skilled{' '}
                            <a href="/digital-marketing" className="underline text-primary">
                                digital marketing
                            </a>{' '}
                            team handles everything from{' '}
                            <a href="/#" className="underline text-primary">
                                SEO
                            </a>{' '}
                            and email marketing to comprehensive marketing strategies. They
                            research your products and services, then implement targeted
                            campaigns to reach your ideal customers effectively.
                        </p>
                        <p>
                            With Clooud Gen, you get a seamless, integrated approach to all
                            your IT and marketing needs, driving your business forward
                        </p>
                    </div>
                </Hero>
            </div>
        </section>
    );

};

export default ItSupport;

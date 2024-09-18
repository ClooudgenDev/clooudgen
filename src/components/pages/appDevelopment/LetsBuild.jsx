import ContactUsDialog from '@/components/shared/contactUsDialog/ContactUsDialog';

const LetsBuild = () => {
  const defaultData = {
    subject: ' I would like to learn more details about Clooud Gen',
    messege:
      'Hello there, I would like to know more about Clooud Gen. Is anyone available to reply to me?',
  };
  return (
    <div className="p-4">
      <div className="bg-[#D6FBFF] max-w-[900px] p-10  mx-auto mt-20">
        <h3 className="text-sm text-center md:text-justify md:text-base mb-7">
          Don&apos;t wait any longer to turn your innovative app idea into a
          reality. Let&apos;s schedule a free consultation to discuss your
          vision and explore how our expert developers can bring it to life.
          We&apos;re confident we can create a user-friendly, high-performing
          app that exceeds your expectations. Let&apos;s Build Your Dream App!
        </h3>
        <ContactUsDialog
          DefaultMessege={defaultData}
          element="Ask more about Clooud Gen"
        />
      </div>
    </div>
  );
};

export default LetsBuild;

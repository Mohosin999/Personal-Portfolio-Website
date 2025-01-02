import ContactForm from "@/components/ui/ContactForm";

const Contact = () => {
  return (
    <div class="w-full h-full mt-24 flex items-center justify-center">
      <div class="w-11/12 h-full flex flex-col items-center justify-center gap-4">
        {/* Heading */}
        <div className="w-full">
          <h3 className="font-bold text-center text-2xl">Contact</h3>
        </div>
        {/* Contanct form */}
        <div className="w-full flex items-center justify-center pb-10">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;

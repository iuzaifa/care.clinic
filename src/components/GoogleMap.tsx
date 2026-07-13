const GoogleMap = () => {
  return (
    <div className="overflow-hidden rounded-lg shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8239.19662149381!2d77.32858361692719!3d28.575524254853818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5ad1aaaaaab%3A0x3a8afdf13220fc68!2sApollo%20Hospitals%20Noida%20%7C%20Best%20Hospital%20In%20Noida!5e0!3m2!1sen!2sin!4v1780486195949!5m2!1sen!2sin"
        className="w-full h-[450px]"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Hospital Location"
      />
    </div>
  );
};

export default GoogleMap;

const MapLocation = () => {
  return (
    <div className="w-full   md:px-0 py-4 md:py-8">
      <div className="relative w-full overflow-hidden aspect-[1/1] md:aspect-[21/9]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.738943429718!2d32.571641173492296!3d0.36141726395854123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbaf3aa556421%3A0xb3fbb1f628fc02a7!2sChristian%20Freedom%20Church%20Ministries!5e0!3m2!1sen!2sug!4v1735329351613!5m2!1sen!2sug"
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MapLocation;

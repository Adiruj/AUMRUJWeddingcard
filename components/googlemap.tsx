export default function GoogleMap() {
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-md">
      <iframe
        allowFullScreen
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d960.9878612522471!2d99.53095056543073!3d18.30120424350572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30d96cba27cb5ecf%3A0xa453012b021a6386!2sLampang%20Resort!5e1!3m2!1sen!2sth!4v1751803600080!5m2!1sen!2sth"
        style={{ border: 0 }}
        title="Lampang Resort Location"
        width="600"
      />
    </div>
  );
}

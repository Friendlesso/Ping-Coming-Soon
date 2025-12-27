export function Footer() {

  const socialMedia = [
    {
      brand: 'fa-facebook',
      lable: "Visit our Facebook profile",
      link: '#'
    },
    {
      brand: 'fa-x-twitter',
      lable: "Visit our X profile",
      link: '#'
    },
    {
      brand: 'fa-instagram',
      lable: "Visit our Instagram profile",
      link: '#'
    }
  ]

  return (
    <footer className="flex flex-col items-center gap-5 text-black">
      <div className="flex gap-5">
        {socialMedia.map((icon) => (
          <a 
            key={icon.brand}
            href={icon.link}
            aria-label={icon.lable}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`fa-brands ${icon.brand} text-(--blue-500) text-2xl px-2 py-2 border rounded-3xl border-(--gray-400) hover:bg() hover:text-white hover:bg-(--blue-500) hover:border-(--blue-500) transition-colors duration-150 ease-in cursor-pointer`}></i>
          </a>
        ))}
      </div>
      <p className="text-(--gray-400)">© Copyright Ping. All rights reserved.</p>
    </footer>
  )
}
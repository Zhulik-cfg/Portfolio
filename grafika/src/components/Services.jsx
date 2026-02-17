

const services = [
  {
    id: 1,
    name: 'Футболки',
    description: 'Друк на бавовняних та синтетичних футболках.',
    price: 'від 350 грн',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'bg-orange-50'
  },
  {
    id: 2,
    name: 'Худі & Світшоти',
    description: 'Теплі речі з вашим унікальним дизайном.',
    price: 'від 850 грн',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'bg-blue-50'
  },
  {
    id: 3,
    name: 'Горнятка',
    description: 'Керамічні та металеві чашки. Хамілеони.',
    price: 'від 200 грн',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'bg-green-50'
  },
  {
    id: 4,
    name: 'Стікери',
    description: 'Вінілові наліпки будь-якої форми та розміру.',
    price: 'від 50 грн',
    image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'bg-yellow-50'
  },
  {
    id: 5,
    name: 'Пакети',
    description: 'Еко-сумки та паперові пакети для бренду.',
    price: 'від 150 грн',
    image: 'https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'bg-purple-50'
  },
  {
    id: 6,
    name: 'Подушки',
    description: 'Декоративні подушки з повним задруком.',
    price: 'від 400 грн',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'bg-pink-50'
  },
];

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Наші Послуги</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Оберіть носій для вашого креативу. Ми гарантуємо найвищу якість друку.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.id} className="flex flex-col items-start justify-between group cursor-pointer">
              <div className="relative w-full overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100">
                <img
                  src={service.image}
                  alt={service.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <span className={`relative z-10 rounded-full ${service.color} px-3 py-1.5 font-medium text-gray-600`}>
                    {service.price}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-indigo-600 transition-colors">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {service.name}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{service.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

// 'use client';

export function Header() {
  console.log('HEADER');

  return (
    <header>
      <h1 className= 'text-4xl/normal font-extrabold py-8 sm:text-5xl/normal sm:py-10 md:text-5xl/normal md:py-11 lg:text-7xl lg:py-12'>

        <a href="#">The Blog</a>
      </h1>
    </header>
  );
}
import React from 'react';
import { ServiceItem } from './ServiceItem';
import { servicesSeeder } from './seeder';

export const Services = () => {
  return (
    <section className="grid-3-info">
      <h2>Services We Provide</h2>
      <div className="grid-3-info__container container">
        {
          servicesSeeder.map( service => (
            <ServiceItem key={service.href} {...service} />
          ))
        }
      </div>
    </section>
  );
};

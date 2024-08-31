/* eslint-disable react-hooks/rules-of-hooks */
import { INewsComponent } from '@/interfaces/homepgeNews';
import React from 'react';
import { useFourUp } from '../useFourUp';
import { FourUp } from '@/components/blog/FourUp';

type Component = 
| INewsComponent

interface IHomepageComponentsProps {
    components: Array<Component>
}

export const UseHomepageComponents = ({components}: IHomepageComponentsProps) => {

  return components?.map((component, _i) => {
    switch(component.__component){
    case 'shared.news':
      return <FourUp {...useFourUp(component)} key={_i} />;
    }
  });
};

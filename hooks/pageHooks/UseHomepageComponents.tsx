/* eslint-disable react-hooks/rules-of-hooks */
import { INewsComponent } from '@/interfaces/homepgeNews';
import React from 'react';
import { useFourUp } from '../useFourUp';
import { FourUp } from '@/components/blog/FourUp';
import { useThreeUp } from '../useThreeUp';
import { ThreeUp } from '@/components/blog/ThreeUp';
import { IHomeThreeUp } from '@/interfaces/ThreeUp';

type Component =
| INewsComponent
| IHomeThreeUp;

interface IHomepageComponentsProps {
    components: Array<Component>
}

export const UseHomepageComponents = ({ components }: IHomepageComponentsProps) => {

  return components?.map((component, _i) => {
    switch(component.__component){
    case 'shared.news':
      return <FourUp {...useFourUp(component as INewsComponent)} key={_i} />;
    case 'shared.three-up':
      return <ThreeUp {...useThreeUp(component as IHomeThreeUp)} key={_i} />;
    }
  });
};

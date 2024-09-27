/* eslint-disable no-unused-vars */
export interface IHomeThreeUp {
    id:          number;
    __component: string;
    Title:       string;
    articles:    IHomeThreeUpArticles;
}

export interface IHomeThreeUpArticles {
    data: PurpleDatum[];
}

export interface PurpleDatum {
    id:         number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    createdAt:    Date;
    updatedAt:    Date;
    publishedAt:  Date;
    display_date: Date;
    heading:      string;
    description:  string;
    slug:         string;
    Preview:      null | string;
    Hero_Image:   HeroImage;
    author:       Author;
    categories:   Categories;
}

export interface HeroImage {
    data: DAT;
}

export interface DAT {
    id:         number;
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               EXT;
    mime:              MIME;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: ProviderMetadata;
    createdAt:         Date;
    updatedAt:         Date;
    related?:          Related[];
}

export enum EXT {
    Jpg = '.jpg',
    PNG = '.png',
}

export interface Formats {
    thumbnail: Large;
    small:     Large;
    medium:    Large;
    large:     Large;
}

export interface Large {
    name:              string;
    hash:              string;
    ext:               EXT;
    mime:              MIME;
    path:              null;
    width:             number;
    height:            number;
    size:              number;
    sizeInBytes:       number;
    url:               string;
    provider_metadata: ProviderMetadata;
}

export enum MIME {
    ImageJPEG = 'image/jpeg',
    ImagePNG = 'image/png',
}

export interface ProviderMetadata {
    public_id:     string;
    resource_type: ResourceType;
}

export enum ResourceType {
    Image = 'image',
}

export interface Related {
    __type?:      string;
    id?:          number;
    createdAt:    Date;
    updatedAt:    Date;
    publishedAt:  Date;
    display_date: Date;
    heading:      string;
    description:  string;
    slug:         string;
    Preview:      null | string;
}

export interface Author {
    data: Data;
}

export interface Data {
    id:         number;
    attributes: TentacledAttributes;
}

export interface TentacledAttributes {
    Name:         string;
    title:        string;
    createdAt:    Date;
    updatedAt:    Date;
    publishedAt:  Date;
    author_image: AuthorImage;
    articles:     AttributesArticles;
}

export interface AttributesArticles {
    data: FluffyDatum[];
}

export interface FluffyDatum {
    id:         number;
    attributes: Related;
}

export interface AuthorImage {
    data: DAT[];
}

export interface Categories {
    data: CategoriesDatum[];
}

export interface CategoriesDatum {
    id:         number;
    attributes: StickyAttributes;
}

export interface StickyAttributes {
    name:        string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
}

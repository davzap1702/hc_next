/* eslint-disable no-unused-vars */
export interface INewsComponent {
    id:          number;
    __component: string;
    title:       string;
    articles:    INewsComponentArticles;
}

export interface INewsComponentArticles {
    data: PurpleDatum[];
}

export interface PurpleDatum {
    id:         number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    display_date: Date;
    heading:      string;
    createdAt:    Date;
    updatedAt:    Date;
    publishedAt:  Date;
    description:  string;
    slug:         string;
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
    PNG = '.png',
    Webp = '.webp',
}

export interface Formats {
    thumbnail: Large;
    medium:    Large;
    small:     Large;
    large?:    Large;
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
    ImagePNG = 'image/png',
    ImageWebp = 'image/webp',
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
    display_date: Date;
    heading:      string;
    createdAt:    Date;
    updatedAt:    Date;
    publishedAt:  Date;
    description:  string;
    slug:         string;
}

export interface Author {
    data: AuthorData;
}

export interface AuthorData {
    id:         number;
    attributes: TentacledAttributes;
}

export interface TentacledAttributes {
    Name:         string;
    title:        string;
    bio:          string;
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
    name:         string;
    display_date: Date;
    createdAt:    Date;
    updatedAt:    Date;
    publishedAt:  Date;
    slug:         string;
    hero_image:   HeroImageClass;
    Components:   any[];
}

export interface HeroImageClass {
    data: HeroImageData;
}

export interface HeroImageData {
    id:         number;
    attributes: IndigoAttributes;
}

export interface IndigoAttributes {
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number | null;
    height:            number | null;
    formats:           Formats | null;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: ProviderMetadata;
    createdAt:         Date;
    updatedAt:         Date;
}

/* eslint-disable no-unused-vars */
export interface IHomePage {
    data: IHomePageData;
    meta: Meta;
}

export interface IHomePageData {
    id:         number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    article:     Article;
    Components:  Component[];
}

export interface Component {
    id:          number;
    __component: string;
    title:       string;
    articles:    Articles;
}

export interface Articles {
    data: ArticlesDatum[];
}

export interface ArticlesDatum {
    id:         number;
    attributes: AttributesElement;
}

export interface FluffyAttributes {
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
    related?:          AttributesElement[];
}

export interface DAT {
    id:         number;
    attributes: FluffyAttributes;
}

export interface HeroImage {
    data: DAT;
}

export interface AttributesElement {
    display_date: Date;
    heading?:     string;
    createdAt:    Date;
    updatedAt:    Date;
    publishedAt:  Date;
    description?: string;
    slug:         string;
    Hero_Image?:  HeroImage;
    __type?:      string;
    id?:          number;
    name?:        string;
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

export enum EXT {
    PNG = '.png',
}

export enum MIME {
    ImagePNG = 'image/png',
}

export interface ProviderMetadata {
    public_id:     string;
    resource_type: ResourceType;
}

export enum ResourceType {
    Image = 'image',
}

export interface Article {
    data: ArticleData;
}

export interface ArticleData {
    id:         number;
    attributes: TentacledAttributes;
}

export interface TentacledAttributes {
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

export interface Author {
    data: AuthorData;
}

export interface AuthorData {
    id:         number;
    attributes: StickyAttributes;
}

export interface StickyAttributes {
    Name:         string;
    title:        string;
    bio:          string;
    createdAt:    Date;
    updatedAt:    Date;
    publishedAt:  Date;
    author_image: AuthorImage;
    articles:     Articles;
}

export interface AuthorImage {
    data: DAT[];
}

export interface Categories {
    data: CategoriesDatum[];
}

export interface CategoriesDatum {
    id:         number;
    attributes: IndigoAttributes;
}

export interface IndigoAttributes {
    name:         string;
    display_date: Date;
    createdAt:    Date;
    updatedAt:    Date;
    publishedAt:  Date;
    slug:         string;
    hero_image:   HeroImage;
    Components:   any[];
}

export interface Meta {
}

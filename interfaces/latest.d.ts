/* eslint-disable no-unused-vars */
export interface IArticleResponse {
    data: IArticleResponseDatum[];
    meta: Meta;
}

export interface IArticleResponseDatum {
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
    categories:   Categories;
    author:       Author;
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
    width:             number | null;
    height:            number | null;
    formats:           Formats | null;
    hash:              string;
    ext:               EXT;
    mime:              MIME;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          Provider;
    provider_metadata: ProviderMetadata;
    createdAt:         Date;
    updatedAt:         Date;
    related?:          Related[];
}

export enum EXT {
    Avif = '.avif',
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
    ImageAvif = 'image/avif',
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

export enum Provider {
    Cloudinary = 'cloudinary',
}

export interface Related {
    __type:       string;
    id:           number;
    name?:        string;
    display_date: Date;
    createdAt:    Date;
    updatedAt:    Date;
    publishedAt:  Date;
    slug:         string;
    heading?:     string;
    description?: string;
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
    articles:     Articles;
}

export interface Articles {
    data: ArticlesDatum[];
}

export interface ArticlesDatum {
    id:         number;
    attributes: StickyAttributes;
}

export interface StickyAttributes {
    display_date: Date;
    heading:      string;
    createdAt:    Date;
    updatedAt:    Date;
    publishedAt:  Date;
    description:  string;
    slug:         string;
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
    hero_image:   HeroImageClass;
    Components:   any[];
}

export interface HeroImageClass {
    data: HeroImageData;
}

export interface HeroImageData {
    id:         number;
    attributes: IndecentAttributes;
}

export interface IndecentAttributes {
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number | null;
    height:            number | null;
    formats:           Formats | null;
    hash:              string;
    ext:               EXT;
    mime:              MIME;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          Provider;
    provider_metadata: ProviderMetadata;
    createdAt:         Date;
    updatedAt:         Date;
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}

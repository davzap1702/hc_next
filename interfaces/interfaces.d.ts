/* eslint-disable no-unused-vars */

export interface IArticle {
    data: IArticleData;
    meta: Meta;
}

export interface IArticleData {
    id:         number;
    attributes: IArticleAttributes;
}

export interface IArticleAttributes {
    display_date: Date;
    heading:      string;
    createdAt:    Date;
    updatedAt:    Date;
    publishedAt:  Date;
    description:  string;
    slug:         string;
    Hero_Image:   IHeroImage;
    categories:   Categories;
    author:       Author;
    Components:   Component[];
}

export interface Component {
    id:          number;
    __component: string;
    Paragraph?:  Paragraph[];
    Media?:      IHeroImage;
}

export interface IHeroImage {
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
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: ProviderMetadata;
    createdAt:         Date;
    updatedAt:         Date;
    related?:          Related[];
}

export interface Formats {
    thumbnail: Large;
    small:     Large;
    medium:    Large;
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

export interface IParagraph {
    type:     ParagraphType;
    children: Child[];
    level?:   number;
}

export interface Child {
    type: ChildType;
    text: string;
}

export enum ChildType {
    Text = 'text',
}

export enum ParagraphType {
    Heading = 'heading',
    Paragraph = 'paragraph',
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
    hero_image:   IHeroImage;
    Components:   any[];
}

export interface Meta {
}

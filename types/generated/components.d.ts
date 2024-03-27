import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentList extends Schema.Component {
  collectionName: 'components_content_lists';
  info: {
    displayName: 'TextList';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    item: Attribute.String;
  };
}

export interface ContentPost extends Schema.Component {
  collectionName: 'components_content_posts';
  info: {
    displayName: 'Article';
    icon: 'folder';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    desc: Attribute.Text;
    img: Attribute.Media;
  };
}

export interface ContentTextWithLogo extends Schema.Component {
  collectionName: 'components_content_text_with_logos';
  info: {
    displayName: 'TextWithLogo';
    icon: 'archive';
    description: '';
  };
  attributes: {
    logo: Attribute.Media;
    name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.list': ContentList;
      'content.post': ContentPost;
      'content.text-with-logo': ContentTextWithLogo;
    }
  }
}

import React from "react";
import {
  Container,
  Wrapper,
  Row,
  Column,
  Link,
  Title,
  Header,
} from "./styles/blogForm";

export default function Blogproperty({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Blogproperty.Wrapper = function BlogpropertyWrapper({
  children,
  ...restProps
}) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Blogproperty.Row = function BlogpropertyRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Blogproperty.Column = function BlogpropertyColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Blogproperty.Link = function BlogpropertyLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Blogproperty.Title = function BlogpropertyWrapper({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Blogproperty.Header = function BlogpropertyHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

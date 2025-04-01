'use client';

import { Card, Image } from 'react-bootstrap';
// eslint-disable-next-line import/extensions
import { Contact } from '@prisma/client';

/* Renders a single Contact. See list/page.tsx. */
const ContactCardAdmin = ({ contact }: { contact: Contact }) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={contact.image} width={75} />
      <Card.Title>
        {contact.firstName}
        &nbsp;
        {contact.lastName}
      </Card.Title>
      <Card.Subtitle>{contact.address}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{contact.description}</Card.Text>
      <p className="blockquote-footer">{contact.owner}</p>
    </Card.Body>
    <Card.Footer className="blockquote-footer">
      { contact.owner }
    </Card.Footer>
  </Card>
);

export default ContactCardAdmin;

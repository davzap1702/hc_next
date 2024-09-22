interface  Props {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<Props>> = ({
  name,
  email,
  company,
  phone,
  message,
}) => (
  <div>
    <h1>You have received a new contact request from the website</h1>

    <p>
      <strong>Name:</strong> {name}
    </p>

    <p>
      <strong>Email:</strong> {email}
    </p>

    <p>
      <strong>Company:</strong> {company}
    </p>

    <p>
      <strong>Phone:</strong> {phone}
    </p>

    <p>
      <strong>Message:</strong> {message}
    </p>

  </div>
);
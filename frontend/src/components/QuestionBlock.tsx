import { Card, Button, Collapse } from 'react-bootstrap';
import { useState } from 'react';

type QuestionBlockProps = {
  question: string;
  answer: JSX.Element | string;
};

export default function QuestionBlock({ question, answer }: QuestionBlockProps) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="mb-3">
      <Card.Header>
        <Button
          variant="link"
          onClick={() => setOpen(!open)}
          aria-controls="collapse-content"
          aria-expanded={open}
        >
          {question}
        </Button>
      </Card.Header>
      <Collapse in={open}>
        <div id="collapse-content" className='answer'>
          <Card.Body>{answer}</Card.Body>
        </div>
      </Collapse>
    </Card>
  );
}

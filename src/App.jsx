import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Header from './components/Header/Header';
import AppButton from './components/AppButton/AppButton';
import FormField from './components/FormField/FormField';
import ProjectCard from './components/ProjectCard/ProjectCard';
import About from './components/About/About';
import projects from './data/projects';
import navItems from './data/navigation';
import photo from './assets/photo-specialist@1x.jpg';
import arrowIcon from './assets/icon-arrow-right.svg';
import mailIcon from './assets/icon-contact.svg';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const stats = [
  { value: '5+', label: 'лет опыта' },
  { value: '40', label: 'проектов' },
  { value: '4,9', label: 'рейтинг' },
];

const skills = ['React', 'TypeScript', 'Node.js', 'Vue', 'PostgreSQL', 'Figma', 'Docker'];

function App() {
  // значение поля ввода приходит из FormField через onValueChange
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [sent, setSent] = useState(false);

  const handleEmailChange = (value) => {
    setEmail(value);
    setEmailError('');
    setSent(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Значение из поля ввода:', email);
    if (!EMAIL_PATTERN.test(email)) {
      setEmailError('Введите корректный email, например name@example.com');
      return;
    }
    setSent(true);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header navItems={navItems} avatar={photo} status="Открыт к проектам" onContactClick={() => scrollTo('contact')} />

      <main>
        {/* Hero: на десктопе две колонки, на планшете и телефоне — одна, фото сверху */}
        <Container as="section" id="home" className="py-5">
          <Row className="align-items-center g-4 g-lg-5 py-lg-4">
            <Col lg={7} className="order-2 order-lg-1 text-center text-lg-start">
              <Badge bg="primary-subtle" text="primary-emphasis" pill className="mb-3 py-2 px-3 fw-medium">
                Фриланс-разработчик · React · Node.js
              </Badge>
              <h1 className="display-5 fw-bold mb-3">Создаю быстрые веб-приложения под ключ</h1>
              <p className="lead text-secondary mb-4">
                Привет! Я Айхан. Помогаю стартапам и малому бизнесу запускать сайты и веб-сервисы: от прототипа в
                Figma до релиза.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <AppButton label="Смотреть проекты" icon={arrowIcon} size="lg" onClick={() => scrollTo('projects')} />
                <AppButton label="Скачать резюме" variant="secondary" size="lg" />
              </div>
            </Col>
            <Col xs={8} sm={6} lg={5} className="order-1 order-lg-2 mx-auto text-center">
              <Image
                src={photo}
                alt="Айхан Рахманкулов, фриланс-разработчик"
                rounded
                fluid
                className="rounded-4 shadow object-fit-cover"
                style={{ maxHeight: 420, aspectRatio: '4 / 5' }}
              />
            </Col>
          </Row>
        </Container>

        {/* Список проектов: 3 колонки на десктопе (lg), 2 на планшете (md), 1 на телефоне (xs) */}
        <section id="projects" className="py-5 bg-white border-top border-bottom">
          <Container>
            <div className="d-flex flex-wrap justify-content-between align-items-end gap-2 mb-4">
              <h2 className="mb-0">Избранные проекты</h2>
              <span className="text-secondary">{projects.length} проектов</span>
            </div>
            <Row xs={1} md={2} lg={3} className="g-4">
              {projects.map((project) => (
                <Col key={project.id}>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tags={project.tags}
                    meta={project.meta}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <Container as="section" id="about" className="py-5">
          <About stats={stats} skills={skills} />
        </Container>

        <Container as="section" id="contact" className="pb-5">
          <Card className="bg-white border-0 shadow-sm rounded-4 p-3 p-md-4 p-lg-5">
            <Row className="g-4 align-items-center">
              <Col lg={5}>
                <h2 className="mb-2">Обсудим ваш проект?</h2>
                <p className="text-secondary mb-0">Оставьте email — отвечу в течение рабочего дня.</p>
              </Col>
              <Col lg={7}>
                <Form noValidate onSubmit={handleSubmit}>
                  <FormField
                    id="email"
                    type="email"
                    label="Email для связи"
                    placeholder="name@example.com"
                    icon={mailIcon}
                    helperText="Отвечу в течение рабочего дня"
                    error={emailError}
                    onValueChange={handleEmailChange}
                  />
                  <div className="d-grid d-sm-block">
                    <AppButton label="Отправить" type="submit" icon={arrowIcon} size="lg" />
                  </div>
                </Form>
                {sent && (
                  <Alert variant="success" className="mt-3 mb-0" dismissible onClose={() => setSent(false)}>
                    Спасибо! Заявка с адреса <strong>{email}</strong> отправлена.
                  </Alert>
                )}
              </Col>
            </Row>
          </Card>
        </Container>
      </main>

      <footer className="py-4 border-top bg-white">
        <Container className="d-flex flex-column flex-md-row justify-content-between gap-2 small text-secondary">
          <span>© 2026 aykhan.dev</span>
          <span>React + React Bootstrap · ЛР №23</span>
        </Container>
      </footer>
    </>
  );
}

export default App;

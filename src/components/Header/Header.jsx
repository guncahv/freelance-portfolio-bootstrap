import { useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import Icon from '../Icon/Icon';
import AppButton from '../AppButton/AppButton';
import logoMark from '../../assets/logo-mark.svg';
import arrowIcon from '../../assets/icon-arrow-right.svg';

/**
 * Шапка сайта на базе <Navbar> из React Bootstrap.
 * На планшете и телефоне (< lg) меню сворачивается в кнопку-«бургер» (Navbar.Toggle).
 * Активный пункт меню хранится в локальном состоянии activeId.
 */
function Header({ navItems, avatar, status = '', onContactClick }) {
  const [activeId, setActiveId] = useState(navItems[0]?.id);
  const [expanded, setExpanded] = useState(false);

  const handleSelect = (id) => {
    setActiveId(id);
    setExpanded(false);
  };

  return (
    <Navbar expand="lg" bg="white" sticky="top" className="border-bottom shadow-sm py-2" expanded={expanded} onToggle={setExpanded}>
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-2" onClick={() => handleSelect('home')}>
          <img src={logoMark} alt="" width="36" height="36" />
          <span>
            aykhan<span className="text-primary">.dev</span>
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" aria-label="Открыть меню" />

        <Navbar.Collapse id="main-nav">
          <Nav className="mx-lg-auto gap-lg-1 my-3 my-lg-0" activeKey={activeId} onSelect={handleSelect}>
            {navItems.map((item) => (
              <Nav.Link
                key={item.id}
                eventKey={item.id}
                href={`#${item.id}`}
                className={`d-flex align-items-center gap-2 px-3 rounded-3 fw-medium ${item.id === activeId ? 'bg-primary-subtle text-primary' : ''}`}
              >
                <Icon src={item.icon} size={18} />
                {item.label}
              </Nav.Link>
            ))}
          </Nav>

          <div className="d-flex flex-wrap align-items-center gap-3 pb-3 pb-lg-0">
            {status && (
              <Badge pill bg="success-subtle" text="success-emphasis" className="fw-medium py-2 px-3">
                ● {status}
              </Badge>
            )}
            <Image src={avatar} alt="Фото специалиста" roundedCircle width={40} height={40} className="object-fit-cover" />
            <AppButton
              label="Связаться"
              icon={arrowIcon}
              onClick={() => {
                setExpanded(false);
                onContactClick?.();
              }}
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

Header.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }),
  ).isRequired,
  avatar: PropTypes.string.isRequired,
  status: PropTypes.string,
  onContactClick: PropTypes.func,
};

export default Header;

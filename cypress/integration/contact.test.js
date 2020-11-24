/// <reference types="cypress" />

describe('Contacts test', () => {
  let phoneNumber;
  let uaSchedule;
  let enSchedule;
  let uaAddress;
  let enAddress;
  let uaCartImage;
  let enCartImage;
  let cartLink;
  let email;
  let id;

  before(() => {
    phoneNumber = '380961737361';
    uaSchedule =
      'Пн: 09:00 - 17:00|Вт: 09:00 - 18:00|Ср: 09:00 - 18:00|Чт: 09:00 - 18:00|Пт: 09:00 - 18:00|Сб: Вихідний|Нд: Вихідний';
    enSchedule =
      'Mon: 9 a.m. - 5 p.m.|Tue: 9 a.m. - 6 p.m.|Wed: 9 a.m. - 6 p.m.|Thu: 9 a.m. - 6 p.m.|Fri: 9 a.m. - 6 p.m.|Sat: Closed|Sun: Closed';
    uaAddress = 'Львів вул. Угорська, 2';
    enAddress = 'Lviv 2 Uhorska Str.';
    uaCartImage =
      'https://horondi.blob.core.windows.net/horondi/images/thumbnail_26ebx5pkkf8cwuvd_map.png';
    enCartImage =
      'https://horondi.blob.core.windows.net/horondi/images/thumbnail_26ebx5pkkf8cwuve_map.png';
    cartLink = `https://www.google.com.ua/maps/place/Uhorska+St,+2,+L'viv,+L'vivs'ka+oblast,+79000/@49.8130011,24.0348852,17z/data=!3m1!4b1!4m5!3m4!1s0x473ae7fa9be7c3b5:0xb30b2516d705bae6!8m2!3d49.8130011!4d24.0370739`;
    email = 'horondi@gmail.com';
    id = '5f46a8ac90e86913ed0a95e1';
  });

  beforeEach(() => {
    cy.login(Cypress.env('ADMIN_LOGIN'), Cypress.env('ADMIN_PASSWORD'));
    cy.visit('/contacts');
    cy.wait(3000);
    cy.get('.MuiTableCell-root.MuiTableCell-body').as('table');
  });

  it('Should find a page title', () => {
    cy.contains('Контактна інформація');
  });

  it('User list row should have all types of necessary information about the user', () => {
    cy.get('@table')
      .eq(0)
      .invoke('text')
      .should('match', /^\+380\(\d{2}\)-\d{3}-\d{2}-\d{2}$/g);
    cy.get('@table')
      .eq(1)
      .invoke('text')
      .should('match', /^(?!.* )(?=.*[0-9])(?=.*[A-Z]).{8,30}$/gi);
    cy.get('@table')
      .eq(2)
      .invoke('text')
      .should('match', /^[а-яА-Я0-9_|,| |/]+$/g);
  });

  it('Data from the server should be equal with the incoming data', () => {
    cy.visit(`contacts/${id}`);

    cy.get('[data-cy=phoneNumber]').should('have.text', phoneNumber);
    cy.get('[data-cy=uaSchedule]').should('have.text', uaSchedule);
    cy.get('[data-cy=enSchedule]').should('have.text', enSchedule);
    cy.get('[data-cy=uaAddress]').should('have.text', uaAddress);
    cy.get('[data-cy=enAddress]').should('have.text', enAddress);
    cy.get('[data-cy=uaCartImage]')
      .should('have.attr', 'src')
      .should('include', uaCartImage);
    cy.get('[data-cy=enCartImage]')
      .should('have.attr', 'src')
      .should('include', enCartImage);
    cy.get('[data-cy=mapLink]').should('have.text', cartLink);
    cy.get('[data-cy=email]').should('have.text', email);
    cy.get('[data-cy=goBackButton]')
      .should('be.visible')
      .should('have.text', 'Назад')
      .click()
      .wait(2000);
    cy.location('pathname', { timeout: 1000 }).should('eq', '/contacts');
  });
});

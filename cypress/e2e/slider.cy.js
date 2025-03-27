describe('Swiper Gallery Test', function () {
	it('Checks if second slide contains "United Kingdom"', function () {
		cy.visit('http://localhost:3000');
		cy.get('.swiper-button-next').click();
		cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
	});
});

describe('Swiper Gallery Test', function () {
	it('Checks if third slide contains "Paris"', function () {
		cy.visit('http://localhost:3000');
		cy.get('.swiper-button-next').click();
		cy.wait(2000);
		cy.get('.swiper-button-next').click({ force: true });
		cy.wait(2000);
		cy.get('.swiper-slide-active').should('contain', 'Paris');
	});
});

describe('Swiper Gallery Test', function () {
	it('Checks if user can navigate', function () {
		cy.visit('http://localhost:3000');
		cy.get('.swiper-button-next').click();
		cy.wait(2000);
		cy.get('.swiper-slide-active').should('contain', 'London');
		cy.get('.swiper-button-prev').click({ force: true });
		cy.wait(2000);
		cy.get('.swiper-slide-active').should('contain', 'Rome');
	});
});

describe('Swiper Gallery Test', function () {
	it('Checks slides have correct values', function () {
		cy.visit('http://localhost:3000');
		cy.get('.swiper-slide-active .card-description').within(() => {
			cy.get('h1').should('contain', 'Rome');
			cy.get('p').should('contain', 'Italy');
		});
		cy.get('.swiper-button-next').click();
		cy.wait(2000);
		cy.get('.swiper-slide-active .card-description').within(() => {
			cy.get('h1').should('contain', 'London');
			cy.get('p').should('contain', 'United Kingdom');
		});
		cy.get('.swiper-button-next').click();
		cy.wait(2000);
		cy.get('.swiper-slide-active .card-description').within(() => {
			cy.get('h1').should('contain', 'Paris');
			cy.get('p').should('contain', 'France');
		});
	});
});

describe('Swiper Gallery Test', () => {
	it('Should display gallery correctly on different devices', () => {
		cy.viewport(1280, 800);
		cy.visit('http://localhost:3000');
		cy.get('.swiper-slide-active').should('be.visible');
		cy.get('.swiper-button-next')
			.should('be.visible')
			.should('not.be.disabled');
		cy.get('.swiper-button-prev')
			.should('be.visible')
			.should('not.be.disabled');
		cy.viewport('ipad-2');
		cy.reload();
		cy.get('.swiper-slide-active').should('be.visible');
		cy.get('.swiper-button-next')
			.should('be.visible')
			.should('not.be.disabled');
		cy.get('.swiper-button-prev')
			.should('be.visible')
			.should('not.be.disabled');
		cy.viewport('iphone-x');
		cy.reload();
		cy.get('.swiper-slide-active').should('be.visible');
		cy.get('.swiper-button-next')
			.should('be.visible')
			.should('not.be.disabled');
		cy.get('.swiper-button-prev')
			.should('be.visible')
			.should('not.be.disabled');
	});
});

describe('Swiper Gallery Test', () => {
	it('Should display gallery correctly', () => {
		cy.visit('http://localhost:3000');
		cy.get('.wrapper').should('be.visible');
		cy.get('.swiper-slide').should('have.length', 3).should('be.visible');
		cy.get('.swiper-button-next')
			.should('be.visible')
			.should('not.be.disabled')
			.click();
		cy.get('.swiper-button-prev')
			.should('be.visible')
			.should('not.be.disabled')
			.click();
	});
});

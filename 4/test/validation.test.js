// test/validation.test.js
import { expect } from 'chai';
import { Validation } from '../dist/validation.js'; 

describe('Validation', () => {
  describe('validateBook', () => {
    it('should return an error if the title is empty', () => {
      const errors = Validation.validateBook('', 'Author', '2022');
      expect(errors).to.have.property('bookTitle', 'Назва книги не може бути пустою');
    });

    it('should return an error if the author is empty', () => {
      const errors = Validation.validateBook('Book Title', '', '2022');
      expect(errors).to.have.property('bookAuthor', 'Автор не може бути пустим');
    });

    it('should return an error if the year is not a number', () => {
      const errors = Validation.validateBook('Book Title', 'Author', 'not a number');
      expect(errors).to.have.property('bookYear', 'Рік видання повинен бути числом');
    });

    it('should return an empty object if all fields are valid', () => {
      const errors = Validation.validateBook('Book Title', 'Author', '2022');
      expect(errors).to.be.empty;
    });
  });

  describe('validateUser', () => {
    it('should return an error if the name is empty', () => {
      const errors = Validation.validateUser('', 'test@example.com');
      expect(errors).to.have.property('userName', "Ім'я не може бути пустим");
    });

    it('should return an error if the email is invalid', () => {
      const errors = Validation.validateUser('User', 'invalid-email');
      expect(errors).to.have.property('userEmail', 'Email не є дійсним');
    });

    it('should return an empty object if all fields are valid', () => {
      const errors = Validation.validateUser('User', 'test@example.com');
      expect(errors).to.be.empty;
    });
  });
});

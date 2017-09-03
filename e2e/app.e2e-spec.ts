import { EjerciciosSemestre1Page } from './app.po';

describe('ejercicios-semestre1 App', () => {
  let page: EjerciciosSemestre1Page;

  beforeEach(() => {
    page = new EjerciciosSemestre1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to mvat!!');
  });
});

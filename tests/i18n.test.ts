import { getDictionary } from '@/lib/i18n';

describe('i18n', () => {
  test('returns English dictionary with correct translations', async () => {
    const dict = await getDictionary('en');
    expect(dict['home.title']).toBe('Your Simple Gateway to US Travel');
    expect(dict['benefits.secure']).toBe('Secure & Private');
  });
  test('returns Spanish dictionary with correct translations', async () => {
    const dict = await getDictionary('es');
    expect(dict['home.title']).toBe('Tu puerta sencilla a los Estados Unidos');
    expect(dict['benefits.fast']).toBe('Rápido y sencillo');
  });
});
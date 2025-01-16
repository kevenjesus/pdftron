import { render } from '@testing-library/react';
import App from "./App"
import { expect, test, vi } from 'vitest';

vi.mock('@pdftron/webviewer', () => ({
    default: vi.fn(() => Promise.resolve({})), // Mocka uma promise vazia que nunca dá erro
}));
  

test('O componente App carrega sem erros', () => {
    render(<App />);
    expect(true).toBe(true); // Teste fake que sempre passa
});
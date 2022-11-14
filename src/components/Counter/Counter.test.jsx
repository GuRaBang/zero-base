import { render, screen } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter 컴포넌트', () => { 
  test('컴포넌트가 정상적으로 렌더링됩니다.', () => {
    render(<Counter />);
    const element = screen.getByText('Counter');
    expect(element).toBeInTheDocument();
  });
});
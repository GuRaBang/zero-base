import { render, screen } from '@testing-library/react';
import { CounterButton } from './CounterButton';

describe('CounterButton 컴포넌트', () => { 
  test('컴포넌트가 정상적으로 렌더링됩니다.', () => {
    render(<CounterButton />);
    const element = screen.getByText('CounterButton');
    expect(element).toBeInTheDocument();
  });
});
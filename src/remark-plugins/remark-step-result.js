import {visit} from 'unist-util-visit';
import {u} from 'unist-builder';

export default function remarkStepResult() {
  const keyPhrase = ':step_result:';

  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      if (node.value.includes(keyPhrase)) {
        // Извлекаем текст до и после keyPhrase
        const [before, after] = node.value.split(keyPhrase);
        const stepResult = after.trim();

        // Заменяем текущий текст на текст до keyPhrase
        parent.children.splice(index, 1, u('text', before.trim()));

        // Добавляем компонент <StepResult> после текущего текста
        parent.children.splice(
          index + 1,
          0,
          u('mdxJsxTextElement', {
            name: 'StepResult',
            attributes: [],
            children: [u('text', stepResult)],
          })
        );
      }
    });
  };
};
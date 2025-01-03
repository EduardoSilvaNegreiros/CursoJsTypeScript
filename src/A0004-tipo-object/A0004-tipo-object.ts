const objectA: {
  keyA: string;
  keyB: string;
  keyC?: string;
  [key: string]: unknown; // Index Signature
} = {
  // unknown vem antes do any na hierarquia
  keyA: 'Value A',
  keyB: 'Value B',
};

objectA.keyA = 'Another Value';
objectA.keyC = 'New Key'; // Não se pode criar outra chave no objeto dessa maneira
objectA.keyD = 'New Key 2 ';
// Sempre que precisa extender um objeto 1: Melhorar o design e criar o objeto de uma vez, 2: Criar um objeto mais 'Aberto'

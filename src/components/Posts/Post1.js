import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const CodeBlock = ({ code }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard');
  };

  return (
    <div style={{ position: 'relative', marginBottom: '1em', background: '#f8f9fa', padding: '1em', borderRadius: '5px' }}>
      <pre>
        <code>{code}</code>
      </pre>
      <Button
        onClick={handleCopy}
        style={{ position: 'absolute', top: '10px', right: '10px' }}
        variant="secondary"
      >
        Copy
      </Button>
    </div>
  );
};

const Post1 = () => {
  const { t } = useTranslation();

  const getExample = `// C# Example for GET request with pagination
using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        using var client = new HttpClient();
        var response = await client.GetAsync("https://api.example.com/resource?page=1&pageSize=10");
        response.EnsureSuccessStatusCode();
        var content = await response.Content.ReadAsStringAsync();
        Console.WriteLine(content);
    }
}`;

  const postExample = `// C# Example for POST request
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        using var client = new HttpClient();
        var content = new StringContent("{\\"key\\":\\"value\\"}", Encoding.UTF8, "application/json");
        var response = await client.PostAsync("https://api.example.com/resource", content);
        response.EnsureSuccessStatusCode();
        var result = await response.Content.ReadAsStringAsync();
        Console.WriteLine(result);
    }
}`;

  const putExample = `// C# Example for PUT request
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        using var client = new HttpClient();
        var content = new StringContent("{\\"key\\":\\"newValue\\"}", Encoding.UTF8, "application/json");
        var response = await client.PutAsync("https://api.example.com/resource/1", content);
        response.EnsureSuccessStatusCode();
        var result = await response.Content.ReadAsStringAsync();
        Console.WriteLine(result);
    }
}`;

  const deleteExample = `// C# Example for DELETE request
using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        using var client = new HttpClient();
        var response = await client.DeleteAsync("https://api.example.com/resource/1");
        response.EnsureSuccessStatusCode();
        Console.WriteLine("Resource deleted");
    }
}`;

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h2>{t('post.title')}</h2>
          <p>{t('post.intro')}</p>
          <h3>{t('post.restTitle')}</h3>
          <p>{t('post.restDescription')}</p>
          <h4>{t('post.getTitle')}</h4>
          <p>{t('post.getDescription')}</p>
          <CodeBlock code={getExample} />
          <h4>{t('post.postTitle')}</h4>
          <p>{t('post.postDescription')}</p>
          <CodeBlock code={postExample} />
          <h4>{t('post.putTitle')}</h4>
          <p>{t('post.putDescription')}</p>
          <CodeBlock code={putExample} />
          <h4>{t('post.deleteTitle')}</h4>
          <p>{t('post.deleteDescription')}</p>
          <CodeBlock code={deleteExample} />
        </Col>
      </Row>
    </Container>
  );
};

export default Post1;

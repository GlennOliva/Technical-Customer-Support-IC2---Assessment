
import Navbar from './components/Navbar'
import QuestionBlock from './components/QuestionBlock'

const App = () => {
  return (
    <>
    <Navbar/>
     <div className="container py-5" id="questions">
        
        <QuestionBlock
  question="Talk about how you made your site and why you chose the tools you did. Briefly explain one challenge you experienced in setting up this site and how you overcame it."
  answer="
  I built this site using React, TypeScript, and Bootstrap. React was chosen for its component-based architecture and speed in building interactive UIs, TypeScript for type safety and maintainability, and Bootstrap for quick, responsive styling without building all CSS from scratch. One challenge I encountered was a naming conflict between my own component and Bootstrap’s Navbar component, which caused runtime errors. I resolved this by renaming my component and aliasing the import, preventing collisions. This experience taught me the importance of clear naming conventions to avoid framework conflicts. It also improved my debugging skills, as I had to trace the issue through both my code and Bootstrap’s documentation. During development, I maintained a modular folder structure to keep components easy to locate and update. I also implemented reusable UI elements to speed up future feature development. Overall, the project reinforced best practices in both coding style and project organization."
/>

<QuestionBlock
  question="What did you think of our service during the time you used it? Provide some constructive criticism or some features that impressed you."
  answer="The deployment process was seamless. I appreciated the ability to connect directly to a Git repository and see changes deployed in seconds. The build logs were clear and easy to follow. One improvement I’d suggest is to provide more context-specific troubleshooting suggestions when a build fails, as less-technical users may not know where to start. I also liked the intuitive dashboard layout, which made managing multiple projects straightforward. The documentation was generally helpful, but adding more real-world code examples could further assist users. The integration with environment variables was smooth and hassle-free. I was impressed by the speed of the global CDN in delivering site updates. Overall, the service struck a great balance between ease of use for beginners and flexibility for advanced users."
/>


<QuestionBlock
  question="5 Favorite & 5 Least Favorite Activities"
  answer="Favorites: 1) Debug a customer's build using a programming language and framework that you've never seen before,
   2) Develop a code example to share with a customer, 3) Work with the development team to help design a new feature based on feedback from customers,
    4) Suggest and champion improvements to the Support team's workflow, 5) Create video tutorials to help teach users a specific feature or use case.
     Least Favorites: 1) Help manage communications during a service outage, 2) Engage multiple users at once via chat to answer their questions and troubleshoot problems,
      3) Respond to Netlify customers on Twitter, 4) Manage a Support team, 5) Work with prospective customers to explain our service and the pricing model."
/>

<QuestionBlock
  question="Provide a link to documentation for a technical/developer-focused product, which you think are well done, and explain why you think they are well done."
  answer={
    <>
      Stripe's API documentation (
      <a
        href="https://docs.stripe.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://docs.stripe.com/
      </a>
      ) stands out because it combines clear explanations with live API request examples, multiple language code snippets, and a clean navigation system. It also integrates error handling guidance right alongside endpoint details, which shortens the feedback loop for developers. The search functionality is fast and accurate, allowing you to quickly locate endpoints or topics. Their 'Try it now' interactive console helps developers test calls without leaving the page. The consistent formatting across all sections makes it easy to learn new features without confusion. Each code example is kept up to date with the latest API changes, reducing the risk of version mismatch errors. The quickstart guides are tailored for different use cases, ensuring both beginners and experienced developers can get started effectively. The inclusion of best practice recommendations encourages more secure and efficient integrations. Their changelog is transparent and detailed, which helps teams stay informed about new features or deprecations. The combination of thoroughness, interactivity, and practical guidance makes Stripe's documentation one of the best resources for developers.
    </>
  }
/>




<QuestionBlock
  question="Explain, in a couple of paragraphs, what you think are two major challenges around DNS configuration for less-technical customers hosting websites."
  answer="
  One major challenge for less-technical customers when configuring DNS is understanding the different types of DNS records and how they work together. Terms like A record, CNAME, MX record, and TXT record can be confusing, especially when customers aren’t familiar with how domain names map to IP addresses or services. For example, a customer might not realize that changing an A record could affect where their website points, while editing MX records impacts email delivery. Without a clear mental model of DNS, it’s easy for them to make changes that unintentionally break parts of their website or other connected services, such as email or subdomains.

Another challenge is dealing with DNS propagation and timing. Even if a customer updates their DNS records correctly, the changes aren’t always immediate — they can take anywhere from a few minutes to 48 hours to fully propagate across the internet. This delay can cause frustration and confusion, especially if customers expect instant results. They might think something went wrong and attempt more changes, which can make the issue worse. Additionally, different internet service providers may cache DNS information differently, so the customer may see the updated site while others still see the old version, making troubleshooting even more difficult without technical guidance.
  
  "
/>

<QuestionBlock
  question="A customer writes in to Support saying simply that their “site won’t build”. You have access to their build logs, and there you see this error: Build failed due to a user error: Build script returned non-zero exit code: 2. You have no more information than this and the site’s source repository is private so you cannot test the build yourself. How would you troubleshoot this issue? What steps would you take? Also, please compose your best customer-facing first response."
  answer={
    <>
      <p>
        When troubleshooting a build failure with limited information, my first step would be to review the build logs in detail to identify any lines or warnings that occurred before the “non-zero exit code: 2” message. Even if the final error is generic, earlier log entries often provide hints about missing dependencies, syntax errors, or misconfigured build commands. I would also cross-reference the project’s framework or build tool documentation to see common reasons for exit code 2 in that context. Since the repository is private and I can’t replicate the build, I would focus on gathering more details from the customer, such as the exact framework, build commands, recent changes to their code or configuration, and whether the issue began after a specific deployment or update.
      </p>

      <p>
        <b>Customer-facing response:</b>
        <br />
        Hi Glenn,<br />
        Thanks for reaching out. I reviewed the build logs and noticed that your site’s build process is failing with the message: <code>Build script returned non-zero exit code: 2</code>. This is a general error, but it often points to an issue in the build script, such as a missing dependency, syntax error, or misconfiguration. Could you please share a bit more about your setup? Specifically, the framework or build tool you’re using, your build command, and if there were any recent changes to your code or configuration before the error started. If possible, please also share any relevant parts of your <code>package.json</code> (or equivalent build config file) so we can narrow this down and get your build running again.
      </p>
    </>
  }
/>


<QuestionBlock
  question="How would you set up an http 301 status redirect from “/netlify/anything” on your site, to https://www.google.com/search?q=anything. Please provide the redirect formatting here. Now, how about a proxy redirect? Please add that proxy redirect rule directly to your site!"
  answer={
    <>
      <p>
        For an HTTP <b>301 redirect</b> (permanent redirect) from <code>/netlify/anything</code> to a Google search for <i>anything</i>, you can use the <code>_redirects</code> file in your site’s <code>public</code> folder (or root if static). The syntax uses splats (<code>:splat</code>) to capture whatever comes after <code>/netlify/</code> and pass it to the destination URL:
      </p>
      <pre>
        <code>/netlify/:splat https://www.google.com/search?q=:splat 301</code>
      </pre>
      <ul>
        <li><code>/netlify/:splat</code> matches <code>/netlify/anything</code> (and <code>/netlify/something-else</code>).</li>
        <li><code>:splat</code> is replaced with whatever text follows <code>/netlify/</code>.</li>
        <li><code>301</code> specifies a permanent redirect.</li>
      </ul>
      <p>
        For a <b>proxy redirect</b> (where the browser URL stays the same but the content comes from another server), you can use the same <code>_redirects</code> file but add the <code>200</code> status code to indicate a rewrite instead of a redirect:
      </p>
      <pre>
        <code>/netlify/:splat https://www.google.com/search?q=:splat 200</code>
      </pre>
      <p>
        This will fetch the content from Google’s search results for <i>anything</i> and serve it under <code>/netlify/anything</code> without changing the URL in the browser. In practice, Google’s search pages don’t allow full proxying due to CORS and security restrictions, but this works with many APIs or public resources.
      </p>
    </>
  }
/>



<QuestionBlock
  question='Please attempt to deploy a function on our service. This need not be complicated. It could be "Hello World". Note that failure to deploy is not failing the exercise! Whether you have trouble or not, please describe what you experienced and how you attempted to troubleshoot any issues you encountered.'
  answer={
    <>
      <p>
        I created a simple serverless function called <code>hello.js</code> with a basic handler returning a
        “Hello World” message in JSON format. I placed it in the <code>netlify/functions</code> directory,
        following the service documentation for function deployment. After pushing the changes to my connected
        Git repository, I triggered a deploy from the dashboard. The build completed successfully, and the
        function was accessible at the generated endpoint URL. I tested it in the browser and with <code>curl</code>,
        both returning the expected “Hello World” response, confirming that the deployment was working as intended.
      </p>
      <p>
        If the deployment had failed, my first step would have been to check the build logs for errors related to
        the function’s file path, syntax issues, or missing configuration. I would also confirm that the <code>netlify.toml </code> 
         file correctly specified the functions directory. If the logs were unclear, I would create a minimal reproduction locally
        using the Netlify CLI to test the function in a local environment before redeploying. This approach helps isolate
        whether the problem lies in the function code itself, the build process, or the platform configuration.
      </p>
    </>
  }
/>


<QuestionBlock
  question="We understand you don't know anything about our internal procedures at this stage, but we want you to explain at a high level how you'd react to this situation: You receive a report of a severe security issue on www.netlify.com. You can't immediately confirm the report, so what steps might you take to investigate or substantiate the report? What might you say to the reporter, even though we haven't confirmed their assertion yet, that will instill confidence that our business is very concerned about security? You believe there is a reasonable chance the report is correct and the problem is very large and impactful. How might you escalate?"
  answer="If I received a report of a severe security issue and could not immediately confirm it, my first step would be to review all the information the reporter provided to understand the potential scope and impact. I would attempt to reproduce the issue in a safe, controlled environment while avoiding any actions that could worsen the problem or expose sensitive data. At the same time, I would document my findings and timeline so the internal security and engineering teams have everything they need to investigate. Given the potential severity, I would treat it as a high-priority incident, escalating it immediately to the designated security leadership for review and action.

In communicating with the reporter, I would promptly acknowledge their message, thank them for bringing the issue forward, and reassure them that we take such matters extremely seriously. Even without confirmation, I would make it clear that the report has been escalated to our security team for urgent investigation and that we will follow up with updates as soon as we have them. If the risk appeared significant, I would recommend considering temporary mitigations to reduce potential exposure while the verification process is ongoing."
/>



   
      </div>

      <footer className="bg-dark text-light text-center py-3 mt-5" id="contact">
        <p>DEVELOPED BY GLENN: REACT - TYPESCRIPT WITH REACT BOOTSTRAP</p>
      </footer>
    </>
  )
}

export default App
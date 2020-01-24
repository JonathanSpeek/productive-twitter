console.log(
  `%c 
                            ___......__             _
                        _.-'           ~-_       _.=a~~-_
--=====-.-.-_----------~   .--.       _   -.__.-~ ( ___===>
              '''--...__  (    \ \\\ { )       _.-~
                        =_ ~_  \\-~~~//~~~~-=-~
                         |-=-~_ \\   \\
                         |_/   =. )   ~}
                         |}      ||
                        //       ||
                      _//        {{
                   '='~'          \\_    =
                                   ~~'
                              run! @sarah_edo is shitposting again!
`,
  "font-family:monospace"
)

while (true) {
  let promoted = document.evaluate("//span[contains(., 'Promoted')]", document, null, XPathResult.ANY_TYPE, null);
  let thisPromoted = promoted.iterateNext();
  thisPromoted.closest('article').remove();
}

// import { downloadFile } from "../app/api/fileDownloadService.js";

// export const printReceipt = (fileName, setLoading = () => {}) => {
//   downloadFile(
//     fileName,
//     (data) => {
//       const iframe = document.createElement("iframe"); //load content in an iframe to print later
//       document.body.appendChild(iframe);

//       iframe.style.display = "none";
//       iframe.src = data;
//       iframe.onload = function () {
//         setTimeout(function () {
//           iframe.focus();
//           iframe.contentWindow.print();
//         }, 1);
//       };
//     },
//     (error) => {},
//     () => {
//       setLoading(false);
//     }
//   );
// };

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreensaverBorneService {

  apiUrl = 'http://192.168.0.143:8443/screensaver';
  private jwtToken = null;
  jwtHelper: JwtHelper = new JwtHelper();

  // private uploadStatus = new Subject<FileStatus[]>();
  // uploadProgress = this.uploadStatus.asObservable();

  // fileStatusArr: FileStatus[] = [];

  constructor(private httpClient: HttpClient, private router: Router) { }

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }

  addToken() {
    localStorage.clear();
    location.reload();
    this.router.navigateByUrl('/login');
  }

  upload(file: any, id: number): Observable<any> {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }

    return this.httpClient.post(this.apiUrl + '/' + id, file,
      {
        headers: new HttpHeaders({
          'authorization': this.jwtToken,
        }), reportProgress: true,
      },
    );
  }



  //


//   uploadFile(file: File, filename: string) {
//     const fileStatus: FileStatus = { filename, progress: 0, hash: '', uuid: '' };
//     this.fileStatusArr.push(fileStatus);

//     this.uploadStatus.next(this.fileStatusArr);

//     const upload = new Upload(file, {
//       endpoint: "https://master.tus.io/files/",
//       retryDelays: [0, 3000, 6000, 12000, 24000],
//       chunkSize: 20000,
//       metadata: {
//         filename,
//         filetype: file.type
//       },
//       onError: async (error) => {
//         console.log(error);
//         return false;
//       },
//       onChunkComplete: (chunkSize, bytesAccepted, bytesTotal) => {
//         this.fileStatusArr.forEach(value => {
//           if (value.filename === filename) {
//             value.progress = Math.floor(bytesAccepted / bytesTotal * 100);
//             value.uuid = upload.url.split('/').slice(-1)[0];
//           }
//         });
//         this.uploadStatus.next(this.fileStatusArr);
//       },
//       onSuccess: async () => {
//         this.fileStatusArr.forEach(value => {
//           if (value.filename === filename) {
//             value.progress = 100;
//           }
//         });
//         this.uploadStatus.next(this.fileStatusArr);
//         return true;
//       }
//     });
//     upload.start();
//   }
// }

}
